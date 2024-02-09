//importaciones de react
import React from 'react';
import { Grid, Container, Paper, Typography } from '@mui/material';

//importacion de libreria de diseño
import { Box, styled } from "@mui/system";

//creacion del nuevo modulo de imagen
const Img = styled("img")({
    width:"50%",
    height:"50%",
    objectFit:"cover",
    objectPosition:"center",
    transition: 'transform 0.3s ease', // Agrega una transición suave al efecto de zoom
    '&:hover': {
        transform: 'scale(1.1)', // Puedes ajustar el valor para controlar el nivel de acercamiento
    },
});

const BrandImages = ({ brandLogos }) => {
    return (
        <>
            <Container>
                <Typography variant="h5" align="center" gutterBottom>
                    Marcas que nos reconocen
                </Typography>
                <Grid container spacing={2}>
                    {brandLogos.map((logo, index) => (
                        <Grid item xs={4} key={index}>
                            <Box sx={{ p: 2, textAlign: 'center' }}>
                                <Img src={logo.logo} alt={`Brand ${index}`} />
                            </Box>
                            {/* <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                            </Paper> */}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};
export default BrandImages;
