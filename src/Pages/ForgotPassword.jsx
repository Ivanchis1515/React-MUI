//importaciones de react
import React, {useState} from 'react';

//importaciones de MUI
import { Container, Box, Grid, Typography, TextField, Button, Paper, Snackbar, Alert } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs'; //migajas de pan
import { Link as RouterLink } from 'react-router-dom'; //manejador para no recargar la pagina
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import ReCAPTCHA from "react-google-recaptcha"; //Google Recaptcha

//importaciones de diseño
import { useTheme } from '@mui/material/styles'; //para uso de temas en MUI

import axios from 'axios'; //uso de axios para peticiones al servidor

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
const ForgotPassword = () => {
    const theme = useTheme();
    //variables de cambio de estado
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    //variables para snack
    const [snackbarOpen, setSnackbarOpen] = useState(false); //estado para abrir el snack
    const [snackbarMessage, setSnackbarMessage] = useState(''); //mensaje
    //variable para el captcha
    const [isCaptchaComplete, setIsCaptchaComplete] = useState(false); //si el captcha se completo

    //cerrar la barra de estado
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    //validar el captcha
    const handleRecaptchaChange = (value) => {
        setIsCaptchaComplete(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //deten el envio del formulario

        // Validar el correo electrónico
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError('Ingrese un correo electrónico válido');
            setSnackbarMessage('Por favor complete todos los campos requeridos.');
            setSnackbarOpen(true);
            return;
        }

        if (!isCaptchaComplete) {
            setSnackbarMessage('Por favor complete el captcha.');
            setSnackbarOpen(true);
            return;
        }

        setEmailError(''); //limpia en caso de errores

        try {
            const response = await axios.post("http://localhost:3000/api/Forgotpassword", {
                correo: email,
            }, {
                withCredentials: true,
            });

            if (response.status === 200) {
                // Muestra un toast de éxito
                setSnackbarMessage("Acabamos de enviarte las instrucciones para restaurar tu contraseña por tu correo electronico");
                setSnackbarOpen(true);       
            }
        } catch (error) {
            //sino se pudo muestra un error
            setSnackbarMessage('Error al procesar la solicitud: ' + error.message);
            setSnackbarOpen(true);   
        }
    };
    return(
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
                        <RouterLink to="/Login" >
                            <Typography color="primary">
                                Iniciar sesión  
                            </Typography>
                        </RouterLink>
                        <Typography color="primary">Reestablecer contraseña</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Paper>
                            {/* Carrusel de opiniones */}
                            <Typography variant="h6">Opiniones de Clientes</Typography>
                            <Carrusel productsCarrusel = {opiniones}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Aquí colocarías tu formulario para recuperar contraseña */}
                        <Typography variant="body1" gutterBottom>
                            Recuperación de cuenta
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            ¿Olvidaste tu contraseña?
                        </Typography>
                        <Typography variant="body1">
                            Ingresa el correo electronico con el que te registraste y mira tu bandeja
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{mt:2}}>
                                    <TextField
                                        fullWidth
                                        label="Correo Electronico *"
                                        variant="outlined"
                                        name="email"
                                        type="text"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        error={!!emailError}
                                        helperText={emailError}
                                    />
                                    <Box display="flex" justifyContent="center" mt={2}>
                                        <ReCAPTCHA
                                            sitekey="6LdwZmspAAAAANUS3pN7mHhG7RGm6mA9v6ZIZxjf"
                                            onChange={(value) => {
                                                handleRecaptchaChange(value);
                                            }}
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="center" mt={1}>
                                        {!isCaptchaComplete && (
                                            <Typography variant="caption" color="error" alignItems="center">
                                                Por favor, completa el captcha.
                                            </Typography>
                                        )}
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box display="flex" justifyContent="space-between">
                                        <RouterLink color="inherit" to="/Login">
                                            Regresar a inicio de sesión
                                        </RouterLink>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                        >
                                            Enviar para recuperar
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default ForgotPassword;