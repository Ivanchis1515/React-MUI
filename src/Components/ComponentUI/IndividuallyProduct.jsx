//importaciones de React
import React from "react";

//importaciones de MUI
import { Container, Card, CardContent, CardMedia, Typography, Button, IconButton, Box, Grid } from "@mui/material";

//importacion de paleta de colores
import { useTheme } from '@mui/material/styles';


//iconos de Material UI
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

const IndividuallyProduct = ({IProduct}) => {
    const theme = useTheme();
    return(
        <>
            <Grid container spacing={1}>
                {IProduct.map((product, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                        <Card key={index} sx={{ 
                            maxWidth: 300, 
                            margin: 1, 
                            display: "flex", 
                            flexDirection: "column", 
                            alignItems: "center" 
                        }}>
                            <Box sx={{ position: "relative", height: "100%", width: "100%", }}>
                                {/* Botón de agregar a favoritos en la esquina superior izquierda */}
                                <IconButton 
                                    sx={{ 
                                        position: "absolute", 
                                        top: 0, 
                                        left: 0, 
                                        backgroundColor: "transparent",  // Fondo transparente
                                        color: product.isFavorite ? "primary" : "default",  // Color primario si está guardado, predeterminado si no
                                    }}
                                    aria-label="Agregar a favoritos"
                                >
                                    <FavoriteIcon />
                                </IconButton>
                                <CardMedia sx={{ width: "100%", paddingTop: "70%" }} image={product.image} title={product.name} />
                            </Box>
                            <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                                <Typography variant="h6" gutterBottom>
                                    {product.name} || {product.ram} || {product.disco}
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" paragraph>
                                    Modelo: {product.model}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Precio: {product.price}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {product.isInSale && "¡En venta!"}
                                </Typography>
                            </CardContent>
                            <Box sx={{ marginTop: 0, display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <Button variant="contained" color="primary">
                                    Ver detalles
                                </Button>   
                                <Box>
                                    {Array.from({ length: product.rating }).map((_, starIndex) => (
                                        <StarIcon key={starIndex} color="primary" />
                                    ))}
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
export default IndividuallyProduct