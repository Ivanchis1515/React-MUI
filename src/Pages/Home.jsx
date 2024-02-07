import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" align="center" gutterBottom>
        Bienvenido a la Tienda de Electrónica
      </Typography>
      <Grid container spacing={3}>
        {/* Producto 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="imagen_producto_1.jpg" // Reemplaza con la ruta de tu imagen
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
          </Card>
        </Grid>
        {/* Producto 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="imagen_producto_2.jpg" // Reemplaza con la ruta de tu imagen
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
          </Card>
        </Grid>
        {/* Producto 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="imagen_producto_3.jpg" // Reemplaza con la ruta de tu imagen
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
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
