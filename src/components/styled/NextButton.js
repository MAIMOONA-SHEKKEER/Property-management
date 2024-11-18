import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledButton } from "./StyledButton";

const NextButton = ({
  onClick,
  disabled = false,
  text = "Next",
  fullWidth = true,
  sx = {},
}) => {
  return (
    <StyledButton
      variant="contained"
      fullWidth={fullWidth}
      sx={{ mt: 2, mb: 2, ...sx }}
      endIcon={<ArrowForwardIcon />}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default NextButton;
