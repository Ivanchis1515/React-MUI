//importaciones de react 
import React, { useState } from "react";
import { Container, Typography, TextField, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs'; //migajas de pan
import { Link as RouterLink } from 'react-router-dom'; //manejador para no recargar la pagina

//iconos
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

//recursos
import IndividuallyProduct from "../Components/ComponentUI/IndividuallyProduct";

//array con contenido
//array productos individuales
const products = [
    {
        image: 'https://www.officedepot.com.mx/medias/100178455.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NTYwNDAxfGltYWdlL2pwZWd8aDI4L2gwYi8xMjE0NTQ1NTE2OTU2Ni8xMDAxNzg0NTUuanBnXzEyMDBmdHd8ZWY1ZTIzODllMWI2ZjhmNGZhMTM2NDUwOTZkNDUxYjk5NWQ4YWU5ODFiNTc2YzgwZmVmZWYzMjcwZWNlZWVjYQ',
        name: 'ASUS Vivobook - Computadora portátil con visualización táctil',
        model: 'X1400EA-I38128',
        ram: '8GB',
        disco: '256GB',
        brand: 'ASUS',
        price: '$6,499.00',
        isInSale: true,
        rating: 4, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/71CbE1sJu-L._AC_SX679_.jpg',
        name: 'ASUS VivoBook - Portátil FHD',
        model: 'Vivobook',
        ram: '8GB',
        disco: '256GB',
        brand: 'ASUS', 
        price: '$7,351.05',
        isInSale: true,
        rating: 3, 
    },
    {
        image: 'https://m.media-amazon.com/images/I/71YCPoR+HmL._AC_SX679_.jpg',
        name: 'Lenovo Legion Ultimate Gaming Laptop',
        model: 'Legion',
        ram: '32GB',
        disco: '1TB',
        brand: 'Lenovo',
        price: '$35,613.13',
        isInSale: true,
        rating: 5, 
    },
];
// const categories = ["Laptops", "Desktops", "Tablets"];
// const ramOptions = ["4GB", "8GB", "16GB", "32GB"];
// const discOptions = ["256GB", "480GB", "1TB"];
// const brandOptions = ["ASUS", "HP", "Dell", "Lenovo"];

const Computadoras = () => {
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
                        // aria-label="breadcrumb"
                        style={{ color: theme.palette.primary.main }}
                        sx={{ mt: 1, mb: 1, p: 1, borderRadius: 1}}
                    >
                        <RouterLink 
                            to="/"
                        >
                            <Typography color="primary">
                                Inicio  
                            </Typography>
                        </RouterLink>
                        <Typography color="primary">Computadoras</Typography>
                    </Breadcrumbs>
                </Grid>
                {/* <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
                <List>
                    <ListItem>
                        <TextField
                            label="Buscar Artículos"
                            variant="outlined"
                            fullWidth
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Filtrar por RAM" />
                            <Select value={selectedRam} onChange={handleRamChange}>
                                <MenuItem value="">Todos</MenuItem>
                                {ramOptions.map((ram) => (
                                    <MenuItem key={ram} value={ram}>
                                        {ram}
                                    </MenuItem>
                                ))}
                            </Select>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Filtrar por disco duro" />
                        <Select value={selectedDisc} onChange={handleDiscChange}>
                            <MenuItem value="">Todos</MenuItem>
                            {discOptions.map((disc) => (
                                <MenuItem key={disc} value={disc}>
                                    {disc}
                                </MenuItem>
                            ))}
                        </Select>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Filtrar por Marca" />
                        <Select value={selectedBrand} onChange={handleBrandChange}>
                            <MenuItem value="">Todos</MenuItem>
                            {brandOptions.map((brand) => (
                                <MenuItem key={brand} value={brand}>
                                    {brand}
                                </MenuItem>
                            ))}
                        </Select>
                    </ListItem>
                </List>
                {/* Otros elementos del menú lateral, si es necesario 
                </Drawer> */}

                <Typography variant="h2" align="center" gutterBottom style={{ color: theme.palette.primary.main }}>
                Catálogo de Computadoras
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
export default Computadoras;