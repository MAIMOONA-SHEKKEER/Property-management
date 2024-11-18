import React from "react";
import { Typography } from "@mui/material";

const CustomSubtitle = ({
  text,
  variant = "body2",
  color = "textSecondary",
  sx,
}) => {
  return (
    <Typography variant={variant} color={color} sx={{ mb: 2, ...sx }}>
      {text}
    </Typography>
  );
};

export default CustomSubtitle;
