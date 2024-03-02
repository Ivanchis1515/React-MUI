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
const ForgotPassword = () => {
    const theme = useTheme();
    //variables de cambio de estado
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar el correo electrónico
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError('Ingrese un correo electrónico válido');
            return;
        }
        setEmailError('');
    };
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
                        <RouterLink to="/Login" >
                            <Typography color="primary">
                                Iniciar sesión  
                            </Typography>
                        </RouterLink>
                        <Typography color="primary">Reestablecer contraseña</Typography>
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
                        <Typography variant="body1" gutterBottom >
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
                                            onClick={handleSubmit}
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