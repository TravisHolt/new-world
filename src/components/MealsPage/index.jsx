import IngredientsSelectRow from "./IngredientsSelectRow";
import Header from "../Header";
import DropDownSelect from "./Select";
import useMealsPageLogic from "./useMealsPageLogic";
import MealsList from "./MealsList";

const MealsPage = () => {
  const {
    ingredients,
    activeIngredients,
    mealsWithIngredients,
    addToIngredientsList,
  } = useMealsPageLogic();

  return (
    <>
      <Header title="INGREDIENT SELECTOR" />
      <IngredientsSelectRow>
        {Object.keys(activeIngredients).map((i) => (
          <DropDownSelect
            value={activeIngredients[i]}
            handleOnChange={addToIngredientsList(i)}
            options={ingredients}
            disabledList={Object.values(activeIngredients)}
          />
        ))}
      </IngredientsSelectRow>
      <MealsList mealsList={mealsWithIngredients} />
    </>
  );
};

export default MealsPage;
