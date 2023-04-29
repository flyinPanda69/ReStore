import { Container, CssBaseline, createTheme } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode : paletteType,
      background : {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function onToggle () {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isDarkMode = {darkMode} onDarkModeToggle={onToggle}/>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
