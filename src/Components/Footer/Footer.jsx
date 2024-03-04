//importaciones de react
import React from 'react'; //hooks
import { Box, Divider, Grid, Typography, Button } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; //enruteria de react

//importaciones de diseño personalizadas
import styled from '@emotion/styled';

//importaciones de iconos
import RocketIcon from '@mui/icons-material/Rocket';

const Footer = ({ ArrayNavLinks }) => {
    const navigate = useNavigate();

    const handleRocketButtonClick = () => {
        // Redireccionar a la pantalla de inicio
        navigate('/');
    };

    return (
        <>
            <Box sx={{ p: 3, textAlign: 'center', mt:8 }}>
                <Divider /> 
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="subtitle2">
                            <Button
                                component={RouterLink}
                                to="/"
                                underline="none"
                                title="Home"
                                onClick={handleRocketButtonClick}
                            >
                                <RocketIcon sx={{ fontSize: 40 }} />
                            </Button>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant="subtitle2" gutterBottom>
                            © Power*Tech. 2024, R&I. All rights reserved
                        </Typography>
                        <Typography variant="caption">
                            Cuando visita o interactúa con nuestros sitios, servicios o herramientas, nosotros o nuestros proveedores
                            de servicios autorizados podemos usar cookies para almacenar información que le ayude a brindarle una
                            experiencia mejor, más rápida y más segura, y para fines de marketing.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
export default Footer;
