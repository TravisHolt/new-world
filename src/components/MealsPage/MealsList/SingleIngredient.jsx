import { makeStyles } from '@mui/styles';
import { useState, useEffect } from 'react';


const useStyles = makeStyles({
  hasIngredient: {
    background: "white",
    borderRadius: "12px",
    height: "96px",
    minWidth: "104px",
    boxShadow: '3px 3px 10px green, -3px 3px 10px green'
  },
  missingIngredient: {
    opacity: .3,
    background: "white",
    borderRadius: "12px",
    height: "96px",
    minWidth: "104px",
  },
  hasNoIngredient: {
    borderRadius: "12px",
    height: "96px",
    minWidth: "108px",
  },
});

const SingleIngredient = ({ ingredient, activeIngredients }) => {
  const classes = useStyles();
  const [ingredientImage, setIngredientImage] = useState(null);

  const determineStyles = () => {
    if (ingredient === '') return classes.hasNoIngredient;
    if (Object.values(activeIngredients).includes(ingredient)) return classes.hasIngredient;
    else return classes.missingIngredient;
  };

  useEffect(() => {
    try {
      const ingredientImageName = ingredient
        .replace("-", "")
        .split(" ")
        .join("")
        .toLowerCase();
      if (ingredientImageName !== "") {
        const image = require(`../../../assets/ingredientImages/${ingredientImageName}.png`).default;
        setIngredientImage(image);
      }
    } catch (err) {
      setIngredientImage(null);
    }
  }, []);

  return (
    <div className={determineStyles()}>
      <img height="100%" src={ingredientImage} />
    </div>
  );
};

export default SingleIngredient;