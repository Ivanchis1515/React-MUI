Instalacion de comandos 
1. Instalacion global de Material ui
    npm install @mui/material @emotion/react @emotion/styled
2. Los estilos de componentes
    npm install @mui/material @mui/styled-engine-sc styled-components
3. Fuentes Roboto: 
    npm install @fontsource/roboto
    NOTA AGREGAR LOS SIGUIENTES FUENTES AL ARCHIVO MAIN
    import '@fontsource/roboto/300.css';
    import '@fontsource/roboto/400.css';
    import '@fontsource/roboto/500.css';
    import '@fontsource/roboto/700.css';
4. Agregar los iconos de MUI
    npm install @mui/icons-material
5. Opcional Lab:
    npm install @mui/lab
6. Instalar npm install react-router-dom@6
    NOTA: hacer la importacion del modulo import { BrowserRouter } from "react-router-dom";
    y englobar toda la aplicacion dentro de ella
7. Instalar la bilioteca de desplazamiento
    npm install aos --save
8. Borrar el app.css y sustituir lo que hay dentro de App.jsx
9. eliminar el contenido del index.css
10. De la carpeta assets hay que eliminar aquello que no usemos, para ayudar con la compilacion final
11. Comenzar a realizar pruebas en app.jsx :D
    NOTA: SI DESPUES DE COLOCAR UN COMPONENTE DE MUI NO SE MUESTRA REALIZAR
    CTRL + ESPACIO PARA MOSTRAR DE DONDE VIENE DICHO COMPONENTE.
12. Hacer uso de la libreria CssBaseline en el componente main.jsx y asi ver la fuente roboto
    NOTA: si se quisiera trabajar MUI para todo el proyecto hay que agregarlo en main.jsx
    sino solo se agrega en el componente que requiera MUI
13. Uso del componente themeProvider para cambiar estilos de donde sea necesario (crear un archivo y hacerle
    referencia en (ThemeProvider theme={theme})
14. Para uso de animaciones y scroll 
    npm install react-spring
15. Para hacer carrusel de imagenes
    npm install react-slick slick-carousel
16. Uso de reCaptcha
    npm install react-google-recaptcha
17. Instalación de Axios para peticiones GET, POST, UPDATE, DELETE
    npm install axios
    Ahora solo importalo en los modulos donde requieras interacción con la base de datos