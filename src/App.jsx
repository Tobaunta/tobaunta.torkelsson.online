import * as React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { createTheme, ThemeProvider } from "@mui/material";
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
      primary: "rgba(0,0,0,0.68)",
    },
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Projects />
      </ThemeProvider>
    </>
  );
}

