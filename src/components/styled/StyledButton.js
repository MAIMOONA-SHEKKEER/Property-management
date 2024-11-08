import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import theme from "../../styles/globalStyles";

export const StyledButton = styled(Button)(({ variant }) => {
  let styles = {};

  if (variant === "contained") {
    styles = {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    };
  } else if (variant === "outlined") {
    styles = {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    };
  } else {
    styles = {
      backgroundColor: "transparent",
      color: theme.palette.primary.dark,
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    };
  }

  return {
    ...styles,
    borderRadius: theme.shape.borderRadius,
    textTransform: "none",
    padding: "8px 16px",
    marginTop: theme.spacing(1),
  };
});
