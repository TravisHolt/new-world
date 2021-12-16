import { makeStyles } from "@mui/styles";
import { Routes, Route } from "react-router-dom";
import MealsPage from "./components/MealsPage";

const useStyles = makeStyles({
  container: {
    background:
      "linear-gradient(21deg, rgba(36,45,54,1) 0%, rgba(32,61,95,1) 100%)",
    display: "flex",
    flexDirection: "column",
    padding: "0 10%",
    height: "100vh",
    overflow: 'scroll',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Routes>
        <Route path="/" element={<MealsPage />} />
      </Routes>
    </div>
  );
};

export default App;
