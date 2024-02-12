//importaciones de React
import React, { useState } from 'react';
import { Container, Box, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs'; //migajas de pan
import { Link as RouterLink } from 'react-router-dom'; //manejador para no recargar la pagina
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '@mui/material/styles'; //para uso de temas en MUI

//recursos
import Carrusel from "../Components/ComponentUI/CarruselImages";

//array para el carrusel de imagenes
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

const RegistroView = () => {
    const theme = useTheme(); //para aplicar colores a los componentes
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        // Reset previous error states
        setUsernameError(false);
        setEmailError(false);
        setPasswordError(false);

        // Implement user registration logic here
        if (!username.trim()) {
            setUsernameError(true);
        }
        if (!email.trim() || !validateEmail(email)) {
            setEmailError(true);
        }
        if (!password.trim()) {
            setPasswordError(true);
        }

        if (username.trim() && email.trim() && validateEmail(email) && password.trim()) {
            console.log('Register with:', username, email, password);
        }
    };

    const validateEmail = (email) => {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
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
                        <Typography color="primary">Registrarse</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Paper>
                            {/* Carrusel de opiniones */}
                            <Typography variant="h6">Opiniones de Clientes</Typography>
                            <Carrusel productsCarrusel = {opiniones}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Aquí colocarías tu formulario de inicio de sesión */}
                        <Box p={3} textAlign="center">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="body1" gutterBottom>
                                        Registro de cuenta
                                    </Typography>
                                    <Typography variant="h4" component="h2" gutterBottom>
                                        ¡Crea una cuenta nueva!
                                    </Typography>
                                    <Typography variant="body1">
                                        Regístrate para acceder a todas las ofertas.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <form onSubmit={handleRegister}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="subtitle2">
                                                    Elige un nombre de usuario
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    label="Nombre de usuario *"
                                                    variant="outlined"
                                                    name="username"
                                                    type="text"
                                                    required
                                                    error={usernameError}
                                                    helperText={usernameError ? 'Ingresa un nombre de usuario válido' : ''}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="subtitle2">
                                                    Ingresa tu correo electrónico
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    label="Correo electrónico *"
                                                    variant="outlined"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    error={emailError}
                                                    helperText={emailError ? 'Ingresa un correo electrónico válido' : ''}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="subtitle2">
                                                    Crea una contraseña
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    label="Contraseña *"
                                                    variant="outlined"
                                                    name="password"
                                                    type="password"
                                                    required
                                                    error={passwordError}
                                                    helperText={passwordError ? 'Ingresa una contraseña válida' : ''}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="subtitle2">
                                                    ¿Ya tienes una cuenta?
                                                    <RouterLink color="inherit" to="/Login" variant="subtitle2">
                                                        Inicia sesión aqui.
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
                                                    Registrarse
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
export default RegistroView;