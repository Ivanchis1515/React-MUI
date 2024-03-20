//importaciones de react
import React, {useState} from 'react';
import { Container, Box, Grid, Typography, TextField, Button, Paper, Snackbar, Alert} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; //manejador para no recargar la pagina
import ReCAPTCHA from "react-google-recaptcha"; //Google Recaptcha
import Breadcrumbs from '@mui/material/Breadcrumbs'; //migajas de pan

import axios from 'axios'; //uso de axios para peticiones al servidor

//iconos
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

//librerias de diseño MUI
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
    const navigate = useNavigate();

    const [email, setEmail] = useState(''); //cambio de estado para el correo
    const [password, setPassword] = useState(''); //cambio de estado para la contra
    const [emailError, setEmailError] = useState(false); //si el correo es invalido
    const [passwordError, setPasswordError] = useState(false); //si la contraseña es invalida
    const [isCaptchaComplete, setIsCaptchaComplete] = useState(false); //si el captcha se completo
    const [snackbarOpen, setSnackbarOpen] = useState(false); //estado para abrir el snack
    const [snackbarMessage, setSnackbarMessage] = useState(''); //mensaje

    //VALIDACION CON REGEX AL CAMPO EMAIL
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    //validar el captcha
    const handleRecaptchaChange = (value) => {
        setIsCaptchaComplete(true);
    };

    //cerrar la barra de estado
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleLogin = async(e) => {
        e.preventDefault(); //deten el envio de formulario

        //reinicia nuevamente los formularios
        setEmailError(false);
        setPasswordError(false);
    
        //si el campo correo no esta vacio y es valido
        if (!email.trim() || !validateEmail(email)) {
            //actualiza su valor a verdadero
            setEmailError(true);
        }

        //si el campo contraseña no esta vacio
        if (!password.trim()) {
            //actualiza su valor a verdadero
            setPasswordError(true);
        }

        if (email.trim() && validateEmail(email) && password.trim() && isCaptchaComplete) {
            try {
                //intenta acceder a la api
                const response = await axios.post("http://localhost:3000/api/Login", {
                    correo: email,
                    contra: password,
                }, {
                    withCredentials: true, // Añade esta línea
                });
    
                //si la respuesta del servidor es 200
                if (response.status === 200) {
                    const data = response.data; //convierte la respuesta en un objeto
                    localStorage.setItem("user", JSON.stringify(data)); //guarda los datos del usuario en la localStorage
                    navigate("/"); //redirecciona a la pagina principal
                }
            } catch (error) {
                //sino se pudo muestra un error
                setSnackbarMessage('Error al procesar la solicitud: ' + error.message);
                setSnackbarOpen(true);
            }
        } else {
            //muestra al usuario en que tipo de campo se equivoco
            let errorMessage = '';
            if (!email.trim() || !validateEmail(email)) {
                setEmailError(true);
                errorMessage = 'Ingrese un correo electrónico válido.';
            } else if (!password.trim()) {
                setPasswordError(true);
                errorMessage = 'Ingrese una contraseña.';
            } else if (!isCaptchaComplete) {
                errorMessage = 'Complete el captcha.';
            }

            setSnackbarMessage(errorMessage);
            setSnackbarOpen(true);
        }
    }
    return (
        <>
            <Container>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert severity="error" onClose={handleSnackbarClose} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
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
                        <Typography color="primary">Iniciar sesión</Typography>
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
                    {/* Aquí colocarías tu formulario de inicio de sesión */}
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
                                    <form onSubmit={handleLogin}>
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
                                                    type="email"
                                                    required
                                                    error={emailError}
                                                    helperText={emailError ? 'Ingresa un correo electrónico válido' : ''}
                                                    onChange={(e) => setEmail(e.target.value)}
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
                                                    error={passwordError}
                                                    helperText={passwordError ? 'Ingresa una contraseña válida' : ''}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="subtitle2">
                                                    ¿Aún no tienes una cuenta? 
                                                    <RouterLink color="inherit" to="/Register" variant="subtitle2">
                                                        Registrate aqui.
                                                    </RouterLink>
                                                </Typography>
                                                <Box display="flex" justifyContent="center" mt={2}>
                                                    <ReCAPTCHA
                                                        sitekey="6LdwZmspAAAAANUS3pN7mHhG7RGm6mA9v6ZIZxjf"
                                                        onChange={(value) => {
                                                            handleRecaptchaChange(value);
                                                        }}
                                                    />
                                                </Box>
                                                {!isCaptchaComplete && (
                                                    <Typography variant="caption" color="error">
                                                        Por favor, completa el captcha.
                                                    </Typography>
                                                )}
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