import React from "react";
import { Box, Card, CardContent } from "@mui/material";

const StyledCard = ({ children, sx = {}, ...props }) => {
  const cardStyles = {
    px: 10, 
    py: 3, 
    mb: 5,
    backgroundColor: "#f7f9fc",
    borderRadius: 2,
    ...sx,
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card variant="outlined" sx={cardStyles} {...props}>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};

export default StyledCard;
