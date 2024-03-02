//importaciones de react 
import React, { useState } from "react";
import { Container, Typography, TextField, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';//para utilizar diseños de la paleta de colores
import Breadcrumbs from '@mui/material/Breadcrumbs'; //migajas de pan
import { Link as RouterLink } from 'react-router-dom'; //manejador para no recargar la pagina
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

//iconos

//recursos
import IndividuallyProduct from "../Components/ComponentUI/IndividuallyProduct";

//array con contenido
//array productos individuales
const products = [
    {
        image: 'https://m.media-amazon.com/images/I/51TEkzK62hL._AC_SX569_.jpg',
        name: 'Consola de Videojuegos Retro 400 en 1 Juegos',
        model: 'HOPEMOB',
        ram: 'Consola Portátil',
        disco: 'Pantalla a Color De 3 Pulgadas',
        brand: 'HOPEMOB',
        price: '$219.00',
        isInSale: true,
        rating: 5, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/814yVSnbxbL._AC_SX569_.jpg',
        name: 'Tablero Arcade Multijuegos',
        model: 'Pandora',
        ram: 'Más de 28,000 Juegos',
        disco: 'Terminado Premium, Uso Rudo, Leds',
        brand: 'Pandora', 
        price: '$3,399.00',
        isInSale: true,
        rating: 5, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/71r5qBxPtzS._AC_SY679_.jpg',
        name: 'Luigi-s Mansion 3 ',
        model: 'Nintendo',
        ram: 'Standard Edition',
        disco: 'Nintendo Switch',
        brand: 'Nintendo',
        price: '$887.00',
        isInSale: true,
        rating: 6, 
    },
];
const Juegos = () => {
    const theme = useTheme();
    // const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    // const [selectedRam, setSelectedRam] = useState("");
    // const [selectedDisc, setSelectedDisc] = useState("");
    // const [selectedBrand, setSelectedBrand] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    // const handleDrawerOpen = () => {
    //     setDrawerOpen(true);
    // };
  
    // const handleDrawerClose = () => {
    //     setDrawerOpen(false);
    // };
  
    const handleSearchChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);

        // Filtrar productos basándose solo en el término de búsqueda
        const filteredResults = products.filter((product) =>
            product.name.toLowerCase().includes(newSearchTerm.toLowerCase())
        );

        setSearchResults(filteredResults);
    }
    return(
        <>
            <Container>
                <Grid item xs={12} md={6}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        style={{ color: theme.palette.primary.main }}
                        sx={{ mt: 1, mb: 1, p: 1 }}
                    >
                        <RouterLink to="/" >
                            <Typography color="primary">
                                Inicio  
                            </Typography>
                        </RouterLink>
                        <Typography color="primary">Juegos y Consolas</Typography>
                    </Breadcrumbs>
                </Grid>
                <Typography variant="h2" align="center" gutterBottom style={{ color: theme.palette.primary.main }}>
                    Catálogo de Juegos y Consolas
                    <TextField
                        label="Buscar Artículos"
                        variant="outlined"
                        fullWidth
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Typography>
                    <IndividuallyProduct IProduct={searchTerm ? searchResults : products} />
            </Container>        
        </>
    )
}
export default Juegos;