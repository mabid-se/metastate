// import "./App.css";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import LandingPage from "./pages/LandingPage";
import { myTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={responsiveFontSizes(createTheme(myTheme))}>
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
