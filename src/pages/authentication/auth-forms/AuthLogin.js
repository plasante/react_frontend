import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { fetchPostData } from '../../../client/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AuthLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const navigate = useNavigate();

  // This is executed when the application mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn) {
      navigate('/');
    }
  }, []); // The empty dependency array ensures that the effect runs only once, on mount

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    return password.length >= 6 && password.length <= 15;
  };

  const handleLogin = async () => {
    // Reset previous errors
    setErrors({ email: '', password: '' });

    // Validation
    if (!validateEmail()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
      return;
    }

    if (!validatePassword()) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be between 6 and 15 characters' }));
      return;
    }

    // Add your login logic here
    fetchPostData('/auth/token', { email, password })
      .then((response) => {
        const { token } = response.data;
        setLoginError('');
        setLoginSuccess('Welcome to the App.');
        localStorage.setItem('token', token);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error logging in: ', error);
        setLoginError('An error occured during login');
        setLoginSuccess('');
      });
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
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      {loginSuccess && <p style={{ color: 'red' }}>{loginSuccess}</p>}
    </Container>
  );
};

export default AuthLogin;
