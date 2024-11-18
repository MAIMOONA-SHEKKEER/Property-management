import React from "react";
import { StyledButton } from "./StyledButton";

const SkipButton = ({ onClick, sx, children }) => {
  return (
    <StyledButton
      variant="outlined"
      fullWidth
      onClick={onClick}
      sx={{ mt: 2, mb: 2, ...sx }}
    >
      Skip
    </StyledButton>
  );
};

export default SkipButton;
