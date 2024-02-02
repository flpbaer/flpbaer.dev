import { ThemeProvider } from "styled-components"
import GlobalStyles from "./assets/styles/globalStyles"
import Home from "./pages/home/home"
import { Theme } from "./types"

function App() {
  const theme: Theme = {
    dark: {
      bg: "#1B1B1B",
      primaryText: "#fff",
      muted: "rgba(255,255,255, 0.8)",
      bgButton: "rgba(255,255,255, 0.3)",
      bgPanel: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 12%)"
    },
    light: {
      bg: "#fff",
      primaryText: "#000",
      muted: "rgba(0,0,0, 0.8)",
      bgButton: "rgba(255,255,255, 0.3)",
      bgPanel: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 12%)"
    }
  }

  return (
    <>
    <GlobalStyles />
    <Home />
    </>
  )
}

export default App
