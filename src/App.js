import Gallery from "./components/Gallery/Gallery";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme/theme";
import "./App.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Gallery />
      </div>
    </ThemeProvider>
  );
}

export default App;
