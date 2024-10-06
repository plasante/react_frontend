import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';

const AuthLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    return password.length >= 6 && password.length <= 15;
  };

  const handleLogin = () => {
    setErrors({ email: '', password: '' });

    // Validation
    if (!validateEmail()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalide email format' }));
      return;
    }

    if (!validatePassword()) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be between 6 and 15 characters' }));
      return;
    }

    // Add your login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <Container component="main" maxWidth="xs" fluid>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!errors.password}
        helperText={errors.password}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default AuthLogin;
