import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    background: "rgba(255,255,255, 0.02)",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    alignItems: "center",
    height: 160,
    marginBottom: 32 
  },
  mealContainer: {
    display: 'flex',
    height: "100%",
    minWidth: '35%',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
    paddingLeft: '12px',
  },
  mealImage: {
    height: "80%",
    padding: "0 12",
  },
  ingredientsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: "100%",
  },
  ingredientImage: {
    background: "white",
  },
  tier: {
    color: 'white',
    fontWeight: "bold",
  },
  stats: {
    color: '#c28f24',
    fontWeight: "bold",
    fontSize: '1.25em'
  },
  level: {
    fontWeight: "bold",
    color: 'white',
  },
  mockImage: {
    background: 'white',
    borderRadius: '12px',
    height: '96px',
    width: '96px'
  }
});

const MealsList = ({ mealsList }) => {
  const classes = useStyles();

  const renderMenu = ({ meal, lvl, stat, tier, ...ingredients }) => {
    let image = meal;

    // removes image if it isn't in our list yet
    try {
      image = require(`../../../assets/mealImages/${meal}.png`);
    } catch (err) {
      image = meal
    }

    const ingredientsList = Object.values(ingredients);
    return (
      <div className={classes.container}>
        <div className={classes.mealContainer}>
          <div className={classes.mealImageContainer}>
            <img className={classes.mealImage} src={image.default} />
          </div>
          <div className={classes.mealInfoContainer}>
            <div className={classes.tier}> {tier} </div>
            <div className={classes.stats}> {stat} </div>
            <div className={classes.level}> {lvl} </div>
          </div>
        </div>
        <div className={classes.ingredientsContainer}>
          { ingredientsList.map(ing => {
            // const ingredientImage = require(`../../../assets/ingredientImages/${ing}.png`)
            // return (
            //   <div className={classes.ingredientImage}>
            //     <img height='100%' src={ingredientImage.default} />
            //   </div>
            // )
            return (
              <div className={classes.mockImage} />
            )
          })}
        </div>
      </div>
    );
  };

  if (mealsList.length === 0) {
    return <p> The ingredients selected wouldn't make a good meal :( </p>;
  }

  return <>{mealsList.map(renderMenu)}</>;
};

export default MealsList;
