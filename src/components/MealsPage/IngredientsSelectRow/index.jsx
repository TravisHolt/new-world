import { Checkbox, FormControlLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DropDownSelect from "../Select";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    background: "rgba(255,255,255, 0.02)",
    borderRadius: "28px",
    margin: "48px 0",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    height: 200,
  },
  grid: {
    width: "90%",
    height: "90%",
    display: "inline-grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "12px",
    justifyItems: "center",
  },
  filterRow: {
    gridRow: 1,
    gap: 18,
    gridColumn: "1/ span 7",
    display: "flex",
    alignItems: "end",
    width: "100%",
    color: "white",
  },
  checkboxLabel: {
    letterSpacing: 1.5,
    fontSize: 14,
  },
  selectOptionsRow: {
    gridRow: 2,
  },
});

const AttributeCheckbox = ({ onChange, name, activeAttributes }) => {
  const classes = useStyles();
  const optionDisabled = (
    activeAttributes.length >= 2
    && !activeAttributes.includes(name)
  );

  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={onChange(name)}
          disabled={optionDisabled}
        />
      }
      label={<div className={classes.checkboxLabel}>{name.toUpperCase()}</div>}
    />
  );
};

const ItemRow = ({
  handleAttributeChange,
  activeAttributes,
  activeIngredients,
  onChange,
  menuOptions,
}) => {
  const classes = useStyles();

  const attributeList = [
    "strength",
    "dexterity",
    "intelligence",
    "focus",
    "constitution",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <div className={classes.filterRow}>
          { attributeList.map(att => (
            <AttributeCheckbox
              onChange={handleAttributeChange}
              name={att}
              activeAttributes={activeAttributes}
            />
          ))}
        </div>
        {Object.keys(activeIngredients).map((_, index) => (
          <DropDownSelect
            className={classes.selectOptionsRow}
            value={activeIngredients[index]}
            handleOnChange={onChange}
            options={menuOptions}
            disabledList={Object.values(activeIngredients)}
            selectIndex={index}
            label={`Ingredient ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemRow;
