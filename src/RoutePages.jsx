//Recursos MUI
import React, {useState} from 'react';
import { Container } from '@mui/material';
//Implementacion de rutas
import { Route, Routes } from 'react-router-dom';
//iconos
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LaptopIcon from '@mui/icons-material/Laptop';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import MouseIcon from '@mui/icons-material/Mouse';
import RememberMeIcon from '@mui/icons-material/RememberMe';
//Pantallas de la pagina
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/LoginView";
import Register from './Pages/RegisterView';
import ForgotPassword from './Pages/ForgotPassword';
import Computadoras from './Pages/Computadoras';
import Telefonos from './Pages/Telefonos';
import Accesorios from './Pages/Accesorios';
import Camaras from './Pages/Camaras';
import Audio from './Pages/Audio';
import Juegos from './Pages/Juegos';
//pagina de error
import ErrorPage from './Pages/ErrorView';

//lista de rutas para navegar
const NavLinks = [
    {
        title: "Home", 
        path:"/",
        element: <Home />,
        icon:<HomeIcon />,
        isNavbarVisible: true,
    },
    {
        title: "Iniciar sesión", 
        path:"/Login",
        element: <Login />,
        icon:<LoginIcon />,
        isNavbarVisible: true,
    },
    {
        title: "Olvide mi contraseña", 
        path:"/forgot-password",
        element: <ForgotPassword />,
        icon:<RememberMeIcon />,
        isNavbarVisible: false,
    },
    {
        title: "Registrarse", 
        path:"/Register",
        element: <Register />,
        icon:<HowToRegIcon />,
        isNavbarVisible: true,
    },
    {
        title: "Computadoras", 
        path:"/catalog/computadoras",
        element: <Computadoras />,
        icon:<LaptopIcon />,
        isNavbarVisible: true,
    },
    {
        title: "Teléfonos Móviles", 
        path:"/catalog/telefonos-moviles",
        element: <Telefonos />,
        icon:<MobileFriendlyIcon />,
        isNavbarVisible: true,
    },
    {
        title: "Accesorios", 
        path:"/catalog/accesorios",
        element: <Accesorios />,
        icon:<MouseIcon />,
        isNavbarVisible: true,
    },
    {
        title: "Cámaras y Fotografía", 
        path:"/catalog/camaras-y-fotografia",
        element: <Camaras />,
        icon:<PhotoCameraIcon />,
        isNavbarVisible: true,
    },
    {
        title: "Audio y Video", 
        path:"/catalog/audio-y-video",
        element: <Audio />,
        icon:<MusicVideoIcon />,
        isNavbarVisible: true,
    },
    {
        title: "Juegos y Consolas", 
        path:"/catalog/juegos-y-consolas",
        element: <Juegos />,
        icon:<VideogameAssetIcon />,
        isNavbarVisible: true,
    },
    {
        title: 'Error 404',
        path: '*',
        element: <ErrorPage />,
        icon: null,
        isNavbarVisible: false,
    },
]
const NavbarLinks = NavLinks.filter(item => item.isNavbarVisible);
const RoutesPages = ({handleToggleDarkMode, handleColorChange, darkMode}) => {
    const [errorCode, setErrorCode] = useState(null);
    const handle500Error = () => {
        setErrorCode(500);
    };
    return(
        <>
            <Navbar ArrayNavLinks={NavbarLinks} handleToggleDarkMode={handleToggleDarkMode} handleColorChange={handleColorChange} darkMode={darkMode}/>
            <Container sx={{mt:2}}>
                <Routes>
                    {NavLinks.map(item => (
                        <Route key={item.title} path={item.path} element={item.element} />
                    ))}
                    <Route path="*" element={<ErrorPage errorCode={errorCode} />} />
                </Routes>
            </Container>
            <Footer ArrayNavLinks={NavLinks} />
        </>
    );
}
export default RoutesPages;