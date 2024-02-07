import React from 'react'
import { useState } from "react";
import ReactDOM from 'react-dom/client'

//uso de la libreria CssBaseline para el estilo de MUI
import { CssBaseline, ThemeProvider } from "@mui/material";
//importacion del componente estilizado
import { lightTheme, darkTheme } from './Components/StyledComponent';
//importacion de react router
import { BrowserRouter } from "react-router-dom";

//importacion de las rutas principales
import Rutas from "./RoutePages";

//importaciones de librerias Roboto
//se necesita instalar npm install @fontsource/roboto LEER README.MD
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <CssBaseline />
          <Rutas toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(<App />);