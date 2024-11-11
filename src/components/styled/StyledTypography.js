import React from 'react';
import Typography from '@mui/material/Typography';

const StyledTypography = ({ children, variant = "h6", sx = {}, ...props }) => {
  return (
    <Typography
      variant={variant}
      sx={{ fontWeight: "medium", color: "#3f51b5", mb: 2, ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default StyledTypography;
