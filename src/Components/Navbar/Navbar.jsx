//importaciones de react
import { useState, useEffect } from "react";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom"; //navegacion sin actualizacion de react
import { useNavigate, Link } from 'react-router-dom'; //permite navegar entre paginas

//recursos
import ColorPickerIndicator from "../ComponentUI/ColorPicker";

//iconos de MUI
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//importacion del Drawer
import DrawerIcons from "./NavbarDrawerList";

const Navbar = ({ArrayNavLinks, handleToggleDarkMode, handleColorChange, darkMode}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [anchorEl, setAnchorEl] = useState(null); //cambio de estado del menu despegable
    const [open, setopen] = useState(false); //creacion de la variable de estado para cambiar el estado de la nav
    const [nombreUsuario, setnombreUsuario] = useState(""); //cambio de estado para el usuario
    const [isAuthenticated, setIsAuthenticated] = useState(false); //verifica si esta autenticado el usuario
    const [userRol, setUserRol] = useState(""); //estado para almacenar el rol del usuario

    const handleMenuClick = (currentTarget) => {
        setAnchorEl(currentTarget);
    };
    
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async() => {
        try{
            //peticion al servidor para cerrar sesion
            const response = await fetch("http://localhost:3000/api/Logout", {
                method: "POST",
                credentials: "include", //incluye las cookies en la solicitud
            });
            if (response.ok) {
                //si la respuesta es exitosa, borra los datos del usuario del localStorage
                localStorage.removeItem("user");
                setnombreUsuario(""); //limpiar el estado del nombre de usuario
                setIsAuthenticated(false);
                //redireccionalo a la página principal
                navigate("/");
            } else {
                // Manejo de errores si la respuesta no es exitosa
                console.error("Error al cerrar sesión:", response.statusText);
            }
            handleMenuClose();
        }
        catch(error){
            console.error("Error al cerrar sesión:", error.message);
        }
    }

    // Utiliza useEffect para realizar acciones después de la renderización inicial
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user")); //obten los datos del usuario
        if (user) {
            const { nombre, rol } = user; //obten el valor nombre y rol del usuario
            setUserRol(rol); // Almacena el rol del usuario
            setnombreUsuario(nombre); //actualiza el estado con el nombre
            setIsAuthenticated(true); //devuelve validacion en el estado
        }
    }, [location.pathname]); //ejecuta el efecto solo una vez al montar el componente
    
    return(
        <>
            <AppBar position="fixed" color="primary" elevation={1}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        edge="start"
                        aria-label="menu"
                        onClick={() => setopen(true)}
                        sx={{display:{xs:"flex", sm:"none"}}}
                    >       
                        <MenuIcon />
                    </IconButton>

                    <Typography  variant="h6" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Power*Tech
                        </Link>
                    </Typography>

                    <ColorPickerIndicator 
                        handleColorChange={handleColorChange} 
                        handleToggleDarkMode={handleToggleDarkMode} 
                        darkMode={darkMode} 
                        colors={['#0083ff', '#f50057', "#FF5733", "#7D11F0", "#32E80F"]}
                    />

                    <Box sx={{display: "flex", alignItems: "center"}}>
                        {isAuthenticated ? (
                            <>
                                <IconButton
                                    color="inherit"
                                    aria-label="account"
                                    onClick={(e) => handleMenuClick(e.currentTarget)}
                                >
                                    <AccountCircleIcon />
                                    <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                                        {nombreUsuario}
                                    </Typography>
                                </IconButton>
                                <Menu
                                    id="account-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                    disableScrollLock
                                >
                                    <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                                </Menu>
                                {
                                    //muestra el botón solo si el rol es "Administrador"
                                    userRol === "Administrador" && (
                                        <Button
                                            color="inherit"
                                            component={NavLink}
                                            to="/Dashboard"
                                        >
                                            Dashboard
                                        </Button>
                                    )
                                }
                            </>
                        ) : (
                            <Box sx={{display:{xs:"none", sm:"block"}}}>
                                {
                                    ArrayNavLinks.filter(item => !item.path.startsWith('/catalog')).map(item => (
                                        <Button
                                            color="inherit"
                                            key={item.title}
                                            component={NavLink}
                                            to={item.path}
                                        >{item.title}</Button>
                                    ))
                                }
                            </Box>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setopen(false)}
                sx={{display:{xs:"flex", sm:"none"}}}
                disableScrollLock
            >
                <DrawerIcons ArrayNavLinks={ArrayNavLinks} NavLink={NavLink} setOpen={setopen}/>
            </Drawer>
        </>
    );
}
export default Navbar;