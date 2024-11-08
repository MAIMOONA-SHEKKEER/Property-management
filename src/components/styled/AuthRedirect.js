import React from 'react';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../../styles/globalStyles';

const AuthRedirect = ({ message, linkText, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <Typography variant="body2" textAlign="center" mt={5}>
      {message}
      <Box
        component="span"
        sx={{ color: theme.palette.primary.main, cursor: "pointer" }}
        onClick={() => navigate(navigateTo)}
      >
        {linkText}
      </Box>
    </Typography>
  );
};

export default AuthRedirect;
