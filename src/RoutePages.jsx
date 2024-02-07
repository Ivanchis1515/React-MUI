//Recursos MUI
import { Container } from '@mui/material';
//Implementacion de rutas
import { Route, Routes } from 'react-router-dom';
//iconos
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
//Pantallas de la pagina
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

//lista de rutas para navegar
const NavLinks = [
    {
        title: "Home", 
        path:"/",
        icon:<HomeIcon />,
    },
    {
        title: "Login", 
        path:"/Login",
        icon:<LoginIcon />,
    },
    {
        title: "Register", 
        path:"/Register",
        icon:<HowToRegIcon />,
    },
]
const RoutesPages = ({toggleDarkMode, darkMode}) => {
    return(
        <>
            <Navbar ArrayNavLinks={NavLinks} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Container sx={{mt:2}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </Container>
        </>
    );
}
export default RoutesPages;