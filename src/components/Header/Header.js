import { AppBar, Toolbar } from "@mui/material";
import SearchInput from "../../UI/SearchInput/SearchInput";
const Header = (props) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <SearchInput
          label="Search"
          onChange={(e) => {
            props.searchImage(e.target.value);
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
