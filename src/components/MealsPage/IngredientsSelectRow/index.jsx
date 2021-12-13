import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    background: 'rgba(255,255,255, 0.02)',
    borderRadius: "28px",
    margin: "48px 0",
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
    height: 200
  },
  rowItemContainer: {
    width: '90%',
    height: '100%',
    display: 'inline-grid',
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: '12px',
    alignItems: 'center',
    justifyItems: 'center'
  },
});

const ItemRow = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.rowItemContainer}>
        {children}
      </div>
    </div>
  );
};

export default ItemRow;
