import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode === true ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Nav settheme={setDarkMode} darkmode={darkMode} theme={theme} />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" exact element={<SignUp />}></Route>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" exact element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
