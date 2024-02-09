import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const LoginForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '300px',
  margin: 'auto',
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    // Implement authentication logic here
    if (!username.trim()) {
      setUsernameError(true);
    }
    if (!password.trim()) {
      setPasswordError(true);
    }

    if (username.trim() && password.trim()) {
      console.log('Login with:', username, password);
      // Add further authentication logic here
    }
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Card>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Iniciar sesión
            </Typography>
            <LoginForm
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
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
                Iniciar sesión
              </Button>
            </LoginForm>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default Login;
