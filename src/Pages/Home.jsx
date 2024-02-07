import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { styled } from "@mui/system";

const HeroSection = styled('div')({
    textAlign: 'center',
    padding: '50px 0',
    backgroundColor: '#2196F3',
    color: 'white',
});
  
// const SmokeEffect = styled('div')({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   background: 'url("imagen_humo.png")', // Reemplaza con la ruta de tu imagen de humo
//   backgroundSize: 'cover',
//   opacity: 0.6,
//   pointerEvents: 'none',
// });

const HeroContent = styled('div')({
  zIndex: 1,
});

const ProductCard = styled(Card)({
  maxWidth: 345,
});
  
const ProductMedia = styled(CardMedia)({
  height: 140,
});

const Home = () => {
    return(
        <>
            <HeroSection>
                <Container>
                    <HeroContent>
                        <Typography variant="h2" gutterBottom>
                            Bienvenido a la Tienda de Electrónica
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Descubre la última tecnología en smartphones, laptops, PC y accesorios electrónicos.
                        </Typography>
                        <Button variant="contained" color="secondary">
                            Quiero conocer más
                        </Button>
                    </HeroContent>
                </Container>
            </HeroSection>
            <Container>
                <Typography variant="h4" align="center" gutterBottom>
                    Productos Destacados
                </Typography>
                <Grid container spacing={3}>
                    {/* Producto 1 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductCard>
                            <ProductMedia
                                image="imagen_producto_1.jpg"
                                title="Producto 1"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Producto 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descripción del producto 1.
                                </Typography>
                            </CardContent>
                        </ProductCard>
                    </Grid>
                    {/* Producto 2 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductCard>
                            <ProductMedia
                                image="imagen_producto_2.jpg"
                                title="Producto 2"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Producto 2
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descripción del producto 2.
                                </Typography>
                            </CardContent>
                        </ProductCard>
                    </Grid>
                    {/* Producto 3 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductCard>
                            <ProductMedia
                                image="imagen_producto_3.jpg"
                                title="Producto 3"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Producto 3
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descripción del producto 3.
                                </Typography>
                            </CardContent>
                        </ProductCard>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Home;
