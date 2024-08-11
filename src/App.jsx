import { useState } from "react";
import { Container, createTheme, Divider, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3d52a0",
    },
    secondary: {
      main: "#7091e6",
    },
    info: {
      main: "#8697c4",
    },
    background: {
      default: "#ede8f5",
      paper: "#ede8f5",
    },
    text: {
      primary: "#000000ad",
    },
  },
});

export default function App() {
  const [english, setEnglish] = useState(false);
  return (
    <>
      <Container sx={{ padding: 2, margin: "auto" }}>
        <ThemeProvider theme={theme}>
          <Navbar english={english} setEnglish={setEnglish} />
          <Hero english={english} />
          <Divider sx={{ my: 10 }} />
          <About english={english} />
          <Divider sx={{ my: 10 }} />
          <Skills english={english} />
          <Divider sx={{ my: 10 }} />
          <Projects english={english} />
        </ThemeProvider>
      </Container>
    </>
  );
}
