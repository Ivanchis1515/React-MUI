import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const RegistrationForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '300px',
  margin: 'auto',
});

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleRegister = () => {
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
      // Add further registration logic here
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Card>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Registro de usuario
            </Typography>
            <RegistrationForm
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              <TextField
                label="Usuario"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError(false);
                }}
                error={usernameError}
                helperText={usernameError ? 'El usuario no puede estar vacío' : ''}
              />
              <TextField
                label="Correo electrónico"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                error={emailError}
                helperText={emailError ? 'Ingrese un correo electrónico válido' : ''}
              />
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                error={passwordError}
                helperText={passwordError ? 'La contraseña no puede estar vacía' : ''}
              />
              <Button type="submit" variant="contained" color="primary" endIcon={<ArrowRightAltIcon />}>
                Registrarse
              </Button>
            </RegistrationForm>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default Register;
    