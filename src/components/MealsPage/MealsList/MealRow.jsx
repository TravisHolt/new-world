import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";

import SingleIngredient from "./SingleIngredient";

const useStyles = makeStyles({
  container: {
    display: "flex",
    background: "rgba(255,255,255, 0.02)",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    alignItems: "center",
    height: 160,
    marginBottom: 32,
  },
  mealContainer: {
    display: "flex",
    height: "100%",
    minWidth: "35%",
    alignItems: "center",
  },
  mealImageContainer: {
    background: "#191719",
    height: "100%",
    width: 160,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 24",
  },
  mealInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "50%",
    paddingLeft: "12px",
  },
  mealImage: {
    height: "80%",
    padding: "0 12",
  },
  ingredientsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  ingredientImage: {
    background: "white",
  },
  tier: {
    color: "white",
    fontWeight: "bold",
  },
  stats: {
    color: "#c28f24",
    fontWeight: "bold",
    fontSize: "1.25em",
  },
  level: {
    fontWeight: "bold",
    color: "white",
  },
});

const MealRow = ({ mealInfo, activeIngredients }) => {
  const { meal, lvl, stat, tier, ...ingredients } = mealInfo;
  const classes = useStyles();

  const [image, setImagePath] = useState(null);
  const ingredientsList = Object.values(ingredients);

  useEffect(() => {
    try {
      const imageName = meal.replace("-", "").split(" ").join("").toLowerCase();
      const image =
        require(`../../../assets/mealImages/${imageName}.png`).default;
      setImagePath(image);
    } catch (err) {
      console.log(meal);
    }
  }, [meal]);

  return (
    <div className={classes.container}>
      <div className={classes.mealContainer}>
        <div className={classes.mealImageContainer}>
          <img className={classes.mealImage} src={image} />
        </div>
        <div className={classes.mealInfoContainer}>
          <div className={classes.tier}> {tier} </div>
          <div className={classes.stats}> {stat} </div>
          <div className={classes.level}> {lvl} </div>
        </div>
      </div>
      <div className={classes.ingredientsContainer}>
        {ingredientsList.map((ing) => (
          <SingleIngredient key={ing} ingredient={ing} activeIngredients={activeIngredients} />
        ))}
      </div>
    </div>
  );
};

export default MealRow;
