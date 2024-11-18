import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { StyledButton } from "./StyledButton";

const SaveButton = ({ 
  onClick, 
  disabled = false, 
  text = "Save", 
  fullWidth = true, 
  sx = {} 
}) => {
  return (
    <StyledButton
      variant="outlined"
      fullWidth={fullWidth}
      sx={{ mt: 2, mb: 2, ...sx }}
      startIcon={<SaveIcon />}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default SaveButton;
