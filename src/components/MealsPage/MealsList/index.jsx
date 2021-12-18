import MealRow from "./MealRow";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  header: {
    fontSize: '18px',
    fontWeight: 'bolder',
    color: "white",
    paddingBottom: '3px'
  }
});

const MealsList = ({ mealsList, activeIngredients }) => {
  const classes = useStyles();

  if (mealsList.length === 0) {
    return <p> The ingredients selected wouldn't make a good meal :( </p>;
  }

  return mealsList.map((meal) => (
    <div>
      <header className={classes.header}>
        { meal.meal }
      </header>
      <MealRow
        key={meal.meal}
        mealInfo={meal}
        activeIngredients={activeIngredients}
      />
    </div>
  ));
};

export default MealsList;
