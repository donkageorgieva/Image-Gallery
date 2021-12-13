import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = (props) => {
  return (
    <TextField
      onChange={props.onChange}
      label={props.label}
      variant="outlined"
      color="secondary"
      size="small"
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root ": {
          "& > fieldset": {
            borderColor: "white",
          },
        },
      }}
      InputProps={{
        endAdornment: <SearchIcon />,
      }}
    />
  );
};

export default SearchInput;
