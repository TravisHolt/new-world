import { useEffect, useState } from "react";
import { ingredientsList, mealsData } from "../../constants";

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

  const addToIngredientsList = (index) => (event) => {
    const value = event.target.value;
    console.log(index, value);
    setActiveIngredients((state) => ({
      ...state,
      [index]: value,
    }));
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
      const findMealsWithIngredients = mealsData.filter((meal) => {
        const ings = Object.values(meal);
        return(compareArraysForLikeValues(ings, ingredientsList));
      });

      if (activeAttributes.length > 0) {
        const test = findMealsWithIngredients.filter(meal => {
          const stats = meal.stat.toLowerCase().split(' ');
          return compareArraysForLikeValues(stats, activeAttributes)
        });
        console.log(test);
        setMealsWithIngredients(test)
      } else {
        setMealsWithIngredients(findMealsWithIngredients)
      }
    } else {
      setMealsWithIngredients([]);
    }
  }, [activeIngredients, activeAttributes]);

  return {
    ingredients,
    activeIngredients,
    mealsWithIngredients,
    activeAttributes,
    handleAttributeChange,
    addToIngredientsList,
  };
};

export default useMealsPageLogic;