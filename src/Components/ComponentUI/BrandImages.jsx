//importaciones de react
import React from 'react';
import { Grid, Container, Typography, useTheme } from '@mui/material';

//importacion de libreria de diseño
import { Box, styled } from "@mui/system";

//creacion del nuevo modulo de imagen
const Img = styled("img")({
    width:"50%",
    height:"50%",
    objectFit:"cover",
    objectPosition:"center",
    transition: 'transform 0.3s ease', //transicion
    '&:hover': {
        transform: 'scale(1.1)', //acercamiento
    },
});

const BrandImages = ({ brandLogos }) => {
    const theme = useTheme();
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    {brandLogos.map((logo, index) => (
                        <Grid item xs={4} key={index}>
                            <Box sx={{ p: 2, textAlign: 'center' }}>
                                <Img
                                    src={logo.logo}
                                    alt={`Brand ${index}`}
                                    style={{ width: '50%', height: '50%', fill: theme.palette.primary.main }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};
export default BrandImages;
