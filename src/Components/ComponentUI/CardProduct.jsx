//importaciones de react
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; //enruteria

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

const ReusableProductCard = ({ image, title, description, to }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Link to={to} style={{ textDecoration: 'none' }}>
                <Card>
                    <Img src={image} alt={title}/>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
};
export default ReusableProductCard;