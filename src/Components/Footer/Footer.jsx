//importaciones de react
import React, { useState } from 'react'; //hooks
import { useSpring, animated } from 'react-spring'; //animaciones de react
import { Box, Divider, Grid, Typography } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; //enruteria de react

//importaciones de diseño personalizadas
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

//importaciones de iconos
import Logo from '../../assets/Cohete2.svg';

//animacion tipo pop-up
const popUpAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

//modulo de imagen animada
const AnimatedImg = styled('img')`
  &:active {
    animation: ${popUpAnimation} 0.2s ease;
  }
`;

const Footer = ({ ArrayNavLinks }) => {
    const navigate = useNavigate();
    const handleRocketClick = () => {
        setTimeout(() => {
            // Redireccionar a la pantalla de inicio
            navigate('/');
        }, 500);
    };

    return (
        <>
            <Box sx={{ p: 3, textAlign: 'center' }}>
                <Divider /> 
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="subtitle2">
                            <RouterLink to="/" underline="none" title="Home">
                                <AnimatedImg
                                    src={Logo}
                                    alt="Logo"
                                    onClick={handleRocketClick}
                                />
                            </RouterLink>
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
