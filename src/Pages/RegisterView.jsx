//importaciones de React
import React, { useState } from 'react';
//importacion de axios para peticiones al servidor
import axios from 'axios';
import { Container, Box, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs'; //migajas de pan
import { Link as RouterLink } from 'react-router-dom'; //manejador para no recargar la pagina
import { useNavigate } from 'react-router-dom'; //permite navegar entre paginas

//iconos
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

//libreria de estilos de MUI
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
    const navigate = useNavigate();

    const theme = useTheme(); //para aplicar colores a los componentes
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    //funcion asincrona que valida los campos 
    const handleRegister = async(e) => {
        //evita que el formulario se envie
        e.preventDefault();

        //reinicia los estados de las casillas para no mostrar errores
        setUsernameError(false);
        setEmailError(false);
        setPasswordError(false);

        //verifica que la casilla del nombre no este vacia cuando este quitando espacios vacios
        if (!username.trim()) {
            //devuelve true en el estado
            setUsernameError(true);
        }
        //verifica que no este vacio cuando quita espacios además de validar si es un correo
        if (!email.trim() || !validateEmail(email)) {
            //devuelve true en su estado
            setEmailError(true);
        }
        //verifica que no este vacia cuando quita espacios
        if (!password.trim()) {
            //devuelve true en su estado
            setPasswordError(true);
        }

        //si todos los campos son validos antes de hacer el registro
        if (username.trim() && email.trim() && validateEmail(email) && password.trim()) {
            console.log('Register with:', username, email, password); //muestra en consola los datos antes de enviarlos
            try{
                //intenta conectar al servidor con metodo post
                const response = await axios.post("http://localhost:3000/api/Register", {
                    //envia los datos
                    nombre:username,
                    correo:email,
                    contra:password
                });
                console.log("mensaje del servidor: ", response.data);
                localStorage.setItem("user", JSON.stringify(response.data)); //guarda los datos en la memoria local
                //redirecciona al inicio si tuvo exito el registro
                navigate("/");
                console.log("Redireccionado con éxito");
            } catch(error){
                console.log("Error al registrar: ", error);
            }
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
                        sx={{ mt: 1, mb: 1, p: 1 }}
                    >
                        <RouterLink to="/">
                            <Typography color="primary">
                                Inicio  
                            </Typography>
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