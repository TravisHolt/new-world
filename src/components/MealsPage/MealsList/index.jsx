import MealRow from "./MealRow";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    fontSize: "18px",
    fontWeight: "bolder",
    color: "white",
    paddingBottom: "3px",
  },
  noData: {
    color: "white",
    fontSize: "2rem",
    textAlign: "center",
    padding: '4rem',
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
  },
});

const MealsList = ({ mealsList, activeIngredients }) => {
  const classes = useStyles();
  const ingredientsList = Object.values(activeIngredients).filter(i => i !== '');

  if (ingredientsList.length === 0) {
    return (
      <p className={classes.noData}>
        No ingredients selected.
      </p>
    );
  }

  if (mealsList.length === 0) {
    return (
      <p className={classes.noData}>
        No Meals Found. Double check your ingredients and try again!
      </p>
    );
  }

  return mealsList.map((meal) => (
    <div key={meal.meal}>
      <header className={classes.header}>{meal.meal}</header>
      <MealRow
        key={meal.meal}
        mealInfo={meal}
        activeIngredients={activeIngredients}
      />
    </div>
  ));
};

export default MealsList;
