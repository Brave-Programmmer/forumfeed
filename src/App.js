import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import {createTheme,ThemeProvider} from '@mui/material/styles'
import Login from './pages/Login';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode === true ?"dark":"light",
    },
  });
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <Nav settheme={setDarkMode} darkmode={darkMode} theme={theme}/>
      <Login/>
    </div>
    </ThemeProvider>
  );
}

export default App;
