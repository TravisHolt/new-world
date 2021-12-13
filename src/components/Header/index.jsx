import { makeStyles } from "@mui/styles";
import Logo from "../../assets/new_world_logo.png";

const useStyles = makeStyles({
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

const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <img className={classes.logo} src={Logo} alt="" />
      <div className={classes.headerTitle}>{title}</div>
    </div>
  );
};

export default Header;