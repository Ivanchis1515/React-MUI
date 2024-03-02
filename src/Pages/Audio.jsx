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
        image: 'https://m.media-amazon.com/images/I/61dYpavbCZL._SX466_.jpg',
        name: 'Cable de audio y video RCA de 1.8 m',
        model: 'SunCala',
        ram: 'para Playstation PS2/PS3',
        disco: '(1 unidad)',
        brand: 'SunCala',
        price: '$148.00',
        isInSale: true,
        rating: 4, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/71-D23ZnrLL._AC_SY450_.jpg',
        name: 'Telvision Onn 100002430 HD 24 pulgadas',
        model: 'Onn',
        ram: 'Pantalla LED Alta definicion',
        disco: '720P HDMI TV USB',
        // brand: 'Xiaomi', 
        price: '$2799.00',
        isInSale: true,
        rating: 4, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/61N12WCQi-L._AC_SY450_.jpg',
        name: 'Capturadora de Video HDMI',
        model: 'CARYWON',
        ram: '4K HDMI a USB 3.0',
        disco: 'Tarjeta de Captura de Video 1080P @ 60Hz',
        brand: 'CARYWON',
        price: '$399.00',
        isInSale: true,
        rating: 3, 
    },
];
const Audio = () => {
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
                        <Typography color="primary">Audio y Video</Typography>
                    </Breadcrumbs>
                </Grid>
                <Typography variant="h2" align="center" gutterBottom style={{ color: theme.palette.primary.main }}>
                    Catálogo de Audio y video
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
export default Audio;