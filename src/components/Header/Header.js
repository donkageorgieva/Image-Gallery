import { AppBar, Toolbar } from "@mui/material";
import SearchInput from "../../UI/SearchInput/SearchInput";
const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <SearchInput label="Search" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
