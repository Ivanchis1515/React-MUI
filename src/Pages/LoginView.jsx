//importaciones de react
import React, {useState} from 'react';
import { Container, Box, Grid, Typography, TextField, Button, Paper,} from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs'; //migajas de pan
import { Link as RouterLink } from 'react-router-dom'; //manejador para no recargar la pagina
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '@mui/material/styles'; //para uso de temas en MUI

//recursos
import Carrusel from "../Components/ComponentUI/CarruselImages";
const opiniones = [
    { 
        title: "ReseñaChida", 
        name: "Jorge Iván", 
        testimonial: "¡Esta tienda es lo más la amooo!", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrh9YJ4KAe2oMuGu58YwYW1BIOBQRAzL6bSg&usqp=CAU",
        rating:5,
    },
    { 
        title: "ReseñaChida2", 
        name: "Ricardo Sanches", 
        testimonial: "Yo no sabia de buenos articulos, me la pasaba comprando malas cosas hasta que llegue aqui", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLRpru63wPXvpnVwytOTf_7QtwGIiNx6AfA&usqp=CAU",
        rating:5,
    }
];
const LoginForm = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validación del formulario
        let valid = true;
        const errors = {
            email: '',
            password: '',
        };
    
        // Validar correo electrónico
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            valid = false;
            errors.email = 'Ingrese un correo electrónico válido';
        }
    
        // Validar contraseña
        if (!formData.password) {
            valid = false;
            errors.password = 'Ingrese una contraseña';
        }
    
        // Actualizar los errores y, si es válido, continuar con la lógica de inicio de sesión
        setFormErrors(errors);
    
        if (valid) {
            // Lógica de inicio de sesión
            console.log('Inicio de sesión exitoso');
        } else {
            console.log('Error en el formulario. Por favor, revise los campos.');
        }
    };
    return (
        <>
            <Container>
                <Grid item xs={12} md={6}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        style={{ color: theme.palette.primary.main }}
                        sx={{ mt: 1, mb: 1, p: 1, bgcolor: 'primary', borderRadius: 1 }}
                    >
                        <RouterLink color="inherit" to="/">
                            Inicio
                        </RouterLink>
                        <Typography color="primary">Iniciar sesión</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        {/* Aquí colocarías tu formulario de inicio de sesión */}
                        <Paper>
                            {/* Carrusel de opiniones */}
                            <Typography variant="h6">Opiniones de Clientes</Typography>
                            <Carrusel productsCarrusel = {opiniones}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box p={3} textAlign="center">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="body1" gutterBottom>
                                        Inicio de sesión
                                    </Typography>
                                    <Typography variant="h4" component="h2" gutterBottom>
                                        Bienvenido de nuevo
                                    </Typography>
                                    <Typography variant="body1">
                                        Ingrese para gestionar su cuenta
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="subtitle2">
                                                    Ingrese su correo electrónico
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    label="Correo electrónico *"
                                                    variant="outlined"
                                                    name="email"
                                                    type="text"
                                                    required
                                                    error={!!formErrors.email}
                                                    helperText={formErrors.email}
                                                    onChange={handleInputChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="subtitle2">
                                                    Ingrese su contraseña
                                                </Typography>
                                                <RouterLink color="inherit" to="/forgot-password" variant="subtitle2">
                                                    ¿Olvidaste tu contraseña?
                                                </RouterLink>
                                                <TextField
                                                    fullWidth
                                                    label="Contraseña *"
                                                    variant="outlined"
                                                    name="password"
                                                    type="password"
                                                    required
                                                    error={!!formErrors.password}
                                                    helperText={formErrors.password}
                                                    onChange={handleInputChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="subtitle2">
                                                    ¿Aún no tienes una cuenta? 
                                                    <RouterLink color="inherit" to="/Register" variant="subtitle2">
                                                        Registrate aqui.
                                                    </RouterLink>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    size="large"
                                                >
                                                    Iniciar sesión
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default LoginForm