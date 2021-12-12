import { useState } from "react";
import { makeStyles } from "@mui/styles";
import ItemRow from "./components/ItemRow";
import DropDownSelect from "./components/Select";
import Logo from "./assets/new_world_logo.png";
import { ingredientsList } from "./constants/ingredients";

const useStyles = makeStyles({
  container: {
    background:
      "linear-gradient(21deg, rgba(36,45,54,1) 0%, rgba(32,61,95,1) 100%)",
    display: "flex",
    flexDirection: "column",
    padding: "0 10%",
    minHeight: "100%",
  },
  header: {
    display: "flex",
    width: "100%",
    height: "164px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "20%",
  },
  headerTitle: {
    fontSize: "48px",
    color: "white",
    fontWeight: "700",
    fontFamily: "Montserrat, sans-serif",
  },
});

const App = () => {
  const [activeIngredients, setActiveIngredients] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  const classes = useStyles();
  const ingredients = ingredientsList.map((i) => ({ value: i, label: i }));

  const addToIngredientsList = (index) => (event) => {
    const value = event.target.value;
    setActiveIngredients((state) => ({
      ...state,
      [index]: value,
    }));
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img className={classes.logo} src={Logo} alt=''/>
        <div className={classes.headerTitle}>INGREDIENT SELECTOR</div>
      </div>
      <ItemRow>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <DropDownSelect
            value={activeIngredients[i]}
            handleOnChange={addToIngredientsList(i)}
            options={ingredients}
            disabledList={Object.values(activeIngredients)}
          />
        ))}
      </ItemRow>
    </div>
  );
};

export default App;
