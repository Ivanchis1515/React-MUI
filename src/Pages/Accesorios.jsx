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
        image: 'https://m.media-amazon.com/images/I/813JYnCLh-L._AC_SY606_.jpg',
        name: 'UGREEN Organizador para Cables Cargadores',
        model: 'UGREEN',
        ram: 'Dimensiones internas: 20,3 x 12,9 x 7,2 cm',
        disco: 'Dimensiones externas: 11,3 x 19,5 cm',
        brand: 'UGREEN',
        price: '$569.00',
        isInSale: true,
        rating: 5, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/618YeUZ+HFL._AC_SY450_.jpg',
        name: 'Cargador para Samsung Galaxy Active Watch',
        model: 'USTIYA',
        ram: 'Galaxy Watch 6, Watch 5, 5 Pro, Watch 4, Watch 3',
        disco: 'Classic, Active, Active2',
        // brand: 'Xiaomi', 
        price: '$199.00',
        isInSale: true,
        rating: 5, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/71112XE+5KL._AC_SY450_.jpg',
        name: 'Bocina Recargable con tecnología',
        model: 'KSW-2006',
        ram: 'Bluetooth, AUX, USB',
        disco: 'Negro',
        brand: 'Honor',
        price: '$2,371.32',
        isInSale: true,
        rating: 5, 
    },
];

const Accesorios = () => {
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
                        <Typography color="primary">Accesorios</Typography>
                    </Breadcrumbs>
                </Grid>
                <Typography variant="h2" align="center" gutterBottom style={{ color: theme.palette.primary.main }}>
                    Catálogo de accesorios
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
    );
}
export default Accesorios;