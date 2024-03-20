//importaciones de React
import React, {useState, useEffect } from "react";
//importaciones de MUI
import { Container, Typography, TextField, Button, Link, Box, Card, CardContent, Snackbar } from '@mui/material';

import { Link as RouterLink, useNavigate } from 'react-router-dom'; //manejador para no recargar la pagina

//alerta MUI
import MuiAlert from '@mui/material/Alert';

import axios from 'axios'; //uso de axios para peticiones al servidor

//iconos 
import LockPasswordIcon from "../assets/lock_password.svg";

const Restablecer = () => {
    const navigate = useNavigate();

    //variables para el cambio de contraseña
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    //variables para abrir la snackbar
    const [open, setOpen] = useState(false);
    //variable para guardar el token
    const [token, setToken] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async(e) => {
        e.preventDefault(); //deten el envio de formulario predeterminado
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden'); //guarda el mensaje
            setOpen(true); //muestra la alerta
        } 
        
        //si las contraseñas son iguales
        try {
            //intenta acceder a la API
            const response = await axios.post("http://localhost:3000/api/Restablecer", {
                token: token,
                newPassword: password,
            });
            
            if (response.status === 200) {
                
                navigate("/Login");
            }
        } catch (error) {
            console.error('Error al restablecer la contraseña:', error.message);
            setError('Error al restablecer la contraseña');
            setOpen(true);
        }
    };

    useEffect(() => {
        // Obtiene el token de la URL
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        setToken(token);
    }, []);
    return(
        <>
            <Container maxWidth="xs">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card sx={{ boxShadow: 4, marginTop: 4 }}>

                        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
                            <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="error">
                                {error}
                            </MuiAlert>
                        </Snackbar>

                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                            <Typography component="span">
                                <img src={LockPasswordIcon} alt="reset password" />
                            </Typography>
                            <Typography variant="h3" paragraph sx={{ textAlign: 'center' }}>Restaura tu contraseña</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                Ingresa una nueva contraseña para iniciar sesión.
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: 2 }}>
                                    <TextField
                                        fullWidth
                                        label="Contraseña *"
                                        variant="outlined"
                                        name="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Confirmar contraseña *"
                                        variant="outlined"
                                        name="confirmPassword"
                                        type="password"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                    >
                                        Restablecer contraseña
                                    </Button>
                                </Box>
                            </form>
                            <Link href="/" variant="subtitle2" sx={{ mt: '1rem', textDecoration: 'none', color: 'inherit' }}>
                                Regresar a inicio
                            </Link>
                        </CardContent> 
                        
                    </Card>
                </Box>
            </Container>
        </>
    );
}
export default Restablecer;