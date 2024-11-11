import React from "react";
import { Box, Card, CardContent } from "@mui/material";

const StyledCard = ({ children, sx = {}, ...props }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        variant="outlined"
        sx={{
          pl: 10,
          pr: 10,
          pt: 3,
          pb: 3,
          mb: 5,
          backgroundColor: "#f7f9fc",
          borderRadius: 2,

          ...sx,
        }}
        {...props}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};

export default StyledCard;
