import IngredientsSelectRow from "./IngredientsSelectRow";
import Header from "../Header";
import useMealsPageLogic from "./useMealsPageLogic";
import MealsList from "./MealsList";

const MealsPage = () => {
  const {
    ingredients,
    activeIngredients,
    mealsWithIngredients,
    activeAttributes,
    addToIngredientsList,
    handleAttributeChange,
  } = useMealsPageLogic();

  return (
    <div>
      <Header title="INGREDIENT SELECTOR" />
      <IngredientsSelectRow
        activeIngredients={activeIngredients}
        onChange={addToIngredientsList}
        menuOptions={ingredients}
        handleAttributeChange={handleAttributeChange}
        activeAttributes={activeAttributes}
      />
      <MealsList mealsList={mealsWithIngredients} />
    </div>
  );
};

export default MealsPage;
