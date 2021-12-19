import { Popper, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  popper: {
    width: 'fit-content',
  },
});

const MyPopper = (props) => {
  const classes = useStyles();
  return (
    <Popper {...props} className={classes.popper} />
  )
}

const DropDownSelect = ({
  handleOnChange,
  value,
  options,
  disabledList,
  selectIndex,
  label
}) => {

  return (
    <Autocomplete
      fullWidth
      PopperComponent={MyPopper}
      ListboxProps={{ style: { maxHeight: '15rem'}}}
      value={value}
      options={options}
      getOptionDisabled={(option) => disabledList.includes(option.value)}
      onChange={handleOnChange(selectIndex)}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          variant='filled'
          label={label}
          sx={{ background: 'white', borderRadius: '3px' }}
        />
      )}
    />
  );
};

export default DropDownSelect;
