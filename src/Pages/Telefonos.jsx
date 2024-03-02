//importaciones de react 
import React, { useState } from "react";
import { Container, Typography, TextField, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles'; //para utilizar diseños de la paleta de colores
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
        image: 'https://m.media-amazon.com/images/I/51qkO9npVML._AC_SX569_.jpg',
        name: 'SAMSUNG Galaxy Z Flip 4',
        model: 'SM-F721U1',
        ram: '8GB',
        disco: '128GB',
        brand: 'Samsung',
        price: '$6,701.49',
        isInSale: true,
        rating: 4, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/51aQ+dft2nL._AC_SY450_.jpg',
        name: 'Xiaomi Smartphone Poco M5s',
        model: 'Poco M5s',
        ram: '8GB',
        disco: '256GB',
        brand: 'Xiaomi', 
        price: '$2,727.00',
        isInSale: true,
        rating: 3, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/61AcSyxihxL._AC_SY606_.jpg',
        name: 'Honor X7A 6+128GB Negro Medianoche',
        model: 'Legion',
        ram: '6GB',
        disco: '128GB',
        brand: 'Honor',
        price: '$2,371.32',
        isInSale: true,
        rating: 5, 
    },
];
const Telefonos = () => {
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
                        <Typography color="primary">Telefonía</Typography>
                    </Breadcrumbs>
                </Grid>
                <Typography variant="h2" align="center" gutterBottom style={{ color: theme.palette.primary.main }}>
                    Catálogo de telefonía
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
export default Telefonos;