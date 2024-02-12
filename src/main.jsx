//importaciones de react
import React from 'react'
import { useState } from "react";
import ReactDOM from 'react-dom/client'

//uso de la libreria CssBaseline para el estilo de MUI
import { CssBaseline, ThemeProvider } from "@mui/material";
//importacion de react router
import { BrowserRouter } from "react-router-dom";

//importacion del componente estilizado
import StyledComponent from './Components/Temas/StyledComponent';

//importacion de las rutas principales
import Rutas from "./RoutePages";

//importaciones de librerias Roboto
//se necesita instalar npm install @fontsource/roboto LEER README.MD
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  //variables de cambio
  const [mainColor, setMainColor] = useState('#0083ff'); // Color inicial
  const [darkMode, setDarkMode] = useState(false); //cambia el modo

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleColorChange = (color) => {
    setMainColor(color);
  };

  const theme = StyledComponent(mainColor, darkMode);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <CssBaseline />
          <Rutas handleColorChange={handleColorChange} handleToggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(<App />);