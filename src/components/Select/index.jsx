import { useState } from 'react';
import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles({
  select: {
    display: "flex",
    "& .MuiSelect-select": {
      backgroundColor: "white",
      color: 'black'
    },
  },
  menuPaper: {
    maxHeight: '40px'
  }
});

const DropDownSelect = ({ handleOnChange, value, options, disabledList }) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth classes={{ root: classes.select }}>
      <Select
        MenuProps={{
          PaperProps: { sx: { maxHeight: 240 } },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        }}
        onChange={handleOnChange}
        value={value}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem disabled={disabledList.includes(option.value)} value={option.value}>
            <em>{option.label}</em>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownSelect;
