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
  const ingredients = ingredientsList.map((i) => ({ value: i, label: i }));

  const addToIngredientsList = (index) => (event) => {
    const value = event.target.value;
    setActiveIngredients((state) => ({
      ...state,
      [index]: value,
    }));
  };

  useEffect(() => {
    const ingredientsList = Object.values(activeIngredients).filter(
      (i) => i !== ""
    );
    const hasIngredients = ingredientsList.length > 0;
    if (hasIngredients) {
      const checkIngredients = (mealIngredients, selectedIngredients) =>
        selectedIngredients.every((i) => mealIngredients.includes(i));

      const findMealsWithIngredients = mealsData.filter((meal) => {
        const ings = Object.values(meal);
        return(checkIngredients(ings, ingredientsList));
      });
      setMealsWithIngredients(findMealsWithIngredients)
    }
  }, [activeIngredients]);


  return {
    activeIngredients,
    addToIngredientsList,
    ingredients,
    mealsWithIngredients,
  };
};

export default useMealsPageLogic;