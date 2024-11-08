import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { registerUser } from '../services/api';

const AccountRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    cellphoneNr: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert('Registration successful! Please verify your email.');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Account Registration</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Full Name" name="fullName" onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Email Address" type="email" name="email" onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Password" type="password" name="password" onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Cellphone Number" type="tel" name="cellphoneNr" onChange={handleChange} required margin="normal" />
        <Button variant="contained" color="primary" type="submit" fullWidth>Register</Button>
      </form>
    </Container>
  );
};

export default AccountRegistration;
