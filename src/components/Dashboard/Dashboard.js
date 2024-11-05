// src/components/Dashboard.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';

function Dashboard() {
    const { user } = useAuth();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Dashboard</Typography>
      {user.role === "ADMIN" && (
        <Typography variant="body1">Access to all properties.</Typography>
      )}
      {user.role === "PO" && (
        <Typography variant="body1">View and manage your linked properties.</Typography>
      )}
      {user.role === "tenant" && (
        <Typography variant="body1">View details of your current property.</Typography>
      )}
      <Button variant="contained" color="secondary" href="/onboarding" sx={{ mt: 2 }}>
        Start Property Onboarding
      </Button>
    </Box>
  );
}

export default Dashboard;
