import { ThemeProvider } from "styled-components"
import GlobalStyles from "./assets/styles/globalStyles"
import Home from "./pages/home/home"
 import { themes } from "./hooks/themeConfigurator"
// import { useThemeMode } from "./context/useTheme"

function App() {
  // const { modeTheme } = useThemeMode();

  return (
    <>
    <ThemeProvider theme={themes}>
    <GlobalStyles />
    <Home />
    </ThemeProvider>
    </>
  )
}

export default App
