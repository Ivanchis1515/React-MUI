//importaciones de react
import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';

//importacion de libreria de diseño
import { styled } from "@mui/system";

//creacion del nuevo modulo de imagen
const Img = styled("img")({
    width:"100%",
    height:"100%",
    objectFit:"cover",
    objectPosition:"center",
    transition: 'transform 0.3s ease', // Agrega una transición suave al efecto de zoom
    '&:hover': {
        transform: 'scale(1.1)', // Puedes ajustar el valor para controlar el nivel de acercamiento
    },
});

const OfferImages = ({offerImages}) => {
    return(
        <>
            <Grid container spacing={2} justifyContent="center">
                {offerImages.map((image, index) => (
                    <Grid item xs={12} sm={8} md={6} lg={4} key={index}>
                        <Card>
                            <Img src={image}/>
                        </Card>
                    </Grid>
                ))}
            </Grid>            
        </>
    )
}
export default OfferImages;