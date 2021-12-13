import { createTheme } from "@mui/material/styles";
import { pink, deepOrange, deepPurple } from "@mui/material/colors";
const primaryColor = deepPurple[500];
const dangerColor = pink["A400"];
const secondaryColor = deepOrange[100];
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
      contrastText: "white",
    },
    error: {
      main: dangerColor,
    },
  },
});
theme.components = {
  MuiCard: {
    styleOverrides: {
      root: {
        width: "30%",
        maxWidth: "100%",
        margin: "1rem",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          margin: "0",
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: secondaryColor,
        secondary: {
          borderColor: "white",
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: "white",
      },
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        padding: "5px 0px 5px 0px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
      },
    },
  },
};

export default theme;
