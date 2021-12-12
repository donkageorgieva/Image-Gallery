import { createTheme } from "@mui/material/styles";
import { pink, green } from "@mui/material/colors";
const primaryColor = pink[600];
const dangerColor = pink["A400"];
const secondaryColor = green[200];
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: dangerColor,
    },
  },
});

export default theme;
