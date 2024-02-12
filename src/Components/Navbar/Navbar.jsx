//importaciones de react
import { useState } from "react";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, MenuItem, Menu  } from "@mui/material";
import { NavLink } from "react-router-dom"; //navegacion sin actualizacion de reacy

import styled from "@emotion/styled"; //libreria de diseño MUI

//recursos
import ColorPickerIndicator from "../ComponentUI/ColorPicker";

//iconos de MUI
import MenuIcon from '@mui/icons-material/Menu';

//importacion del Drawer
import DrawerIcons from "./NavbarDrawerList";

const Navbar = ({ArrayNavLinks, handleToggleDarkMode, handleColorChange, darkMode}) => {
    const [anchorEl, setAnchorEl] = useState(null); //cambio de estado del menu despegable
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    
    //creacion de la variable de estado para cambiar el estado de la nav
    const [open, setopen] = useState(false);
    return(
        <>
            <AppBar position="static" color="primary" elevation={1}>
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
                    {/* <Img src={Logo} alt="Logo" style={{ marginRight: '8px' }} /> */}
                    <Typography  variant="h6" sx={{ flexGrow: 1 }}>Power*Tech</Typography>
                    <ColorPickerIndicator 
                        handleColorChange={handleColorChange} 
                        handleToggleDarkMode={handleToggleDarkMode} 
                        darkMode={darkMode} 
                        colors={['#0083ff', '#f50057', "#FF5733", "#7D11F0", "#32E80F"]}
                    />
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
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setopen(false)}
                sx={{display:{xs:"flex", sm:"none"}}}
            >
                <DrawerIcons ArrayNavLinks={ArrayNavLinks} NavLink={NavLink} setOpen={setopen}/>
            </Drawer>
        </>
    );
}
export default Navbar;