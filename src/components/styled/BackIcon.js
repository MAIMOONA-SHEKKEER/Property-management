import React from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import theme from "../../styles/globalStyles";

const BackIcon = ({ onClick }) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <IconButton
        onClick={onClick}
        aria-label="back"
        sx={{
          position: "absolute",
          top: -5,
          left: -45,
          color: theme.palette.primary.main,
        }}
      >
        <ArrowBack />
      </IconButton>
    </Box>
  );
};

export default BackIcon;
