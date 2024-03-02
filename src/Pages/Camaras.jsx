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
        image: 'https://m.media-amazon.com/images/I/71AqK8NmHxL._AC_SX679_.jpg',
        name: 'Mochila para Cámara Profesional Bolsa Impermeable',
        model: 'NewYouth',
        ram: 'Dimensiones:  33 cm x 26.5 cm x 13',
        disco: 'Es compatible con modelos Canon, Nikon, Sony y más',
        brand: 'NewYouth',
        price: '$419.00',
        isInSale: true,
        rating: 4, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/61drkAcYg2L._AC_SY450_.jpg',
        name: 'Cámara Vlogging 4K para Youtube',
        model: 'Vlogging',
        ram: 'Visión Nocturna HD IPS de 3 Pulgadas',
        disco: '64MP para Fotografía con WiFi, Videocámaras con Zoom Digital 16X',
        // brand: 'Xiaomi', 
        price: '$1420.00',
        isInSale: true,
        rating: 5, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/61XgvLB4RHL._AC_SY450_.jpg',
        name: 'Softbox con Enchufe de Porcelana E26/Cable de Alimentación',
        model: 'NEEWER',
        ram: 'Modificador de Iluminación',
        disco: 'Difusor',
        brand: 'NEEWER',
        price: '$599.00',
        isInSale: true,
        rating: 4, 
    },
];
const Camaras = () => {
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
                        <Typography color="primary">Cámaras y Fotografía</Typography>
                    </Breadcrumbs>
                </Grid>
                <Typography variant="h2" align="center" gutterBottom style={{ color: theme.palette.primary.main }}>
                    Catálogo de Camaras y todo de fotografia
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
export default Camaras;