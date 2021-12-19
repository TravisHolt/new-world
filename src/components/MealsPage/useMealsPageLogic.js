import { useEffect, useState } from "react";
import { ingredientsList } from "../../constants/ingredients";
import { mealsData } from '../../constants/mealsData';

const useMealsPageLogic = () => {
  const [activeIngredients, setActiveIngredients] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  const [mealsWithIngredients, setMealsWithIngredients] = useState([]);
  const [activeAttributes, setActiveAttributes] = useState([]);
  const ingredients = ingredientsList.map((i) => ({ value: i, label: i }));

  const addToIngredientsList = (index) => (event, value) => {
    if (value) {
      setActiveIngredients((state) => ({
        ...state,
        [index]: value.value
      }));
    } else {
      setActiveIngredients((state) => ({
        ...state,
        [index]: ''
      }));
    }
  };

  const handleAttributeChange = (attribute) => (event) => {
    if (activeAttributes.includes(attribute)) {
      setActiveAttributes(state => state.filter(att => att !== attribute));
    } else {
      setActiveAttributes(state => ([...state, attribute]));
    }
  };

  useEffect(() => {
    const ingredientsList = Object.values(activeIngredients).filter(
      (i) => i !== ""
    );
    const hasIngredients = ingredientsList.length > 0;

    const compareArraysForLikeValues = (arr1, arr2) => 
      arr2.every(item => arr1.includes(item));

    if (hasIngredients) {
      const findMealsWithIngredients = Object.values(mealsData).filter((meal) => {
        const ings = Object.values(meal);
        return(compareArraysForLikeValues(ings, ingredientsList));
      });

      if (activeAttributes.length > 0) {
        const mealsWithSelectedAttribute = findMealsWithIngredients.filter(meal => {
          const stats = meal.stat.toLowerCase().split(' ');
          return compareArraysForLikeValues(stats, activeAttributes)
        });
        // set meals that include ingredients and attributes
        setMealsWithIngredients(mealsWithSelectedAttribute)
      } else {
        // return meals that include ingredients
        setMealsWithIngredients(findMealsWithIngredients)
      }
    } else {
      setMealsWithIngredients([]);
    }
  }, [activeIngredients, activeAttributes]);

  return {
    ingredients,
    activeAttributes,
    activeIngredients,
    mealsWithIngredients,
    handleAttributeChange,
    addToIngredientsList,
  };
};

export default useMealsPageLogic;