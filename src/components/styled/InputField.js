import React from "react";
import { TextField, InputAdornment, IconButton, styled } from "@mui/material";
import { Phone, Email, VisibilityOff, Visibility, Person } from "@mui/icons-material";

const RedAsterisk = styled("span")({
  color: "red",
});

const InputField = ({
  type,
  label,
  required,
  onClick,
  showPassword,
  error,
  ...props
}) => {
  const getAdornment = () => {
    switch (type) {
      case "password":
        return (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        );
      case "email":
        return (
          <InputAdornment position="start">
            <Email />
          </InputAdornment>
        );
      case "number":
        return (
          <InputAdornment position="start">
            <Phone />
          </InputAdornment>
        );
      default:
        return (
          <InputAdornment position="start">
            <Person />
          </InputAdornment>
        );
    }
  };

  return (
    <TextField
      {...props}
      type={showPassword && type === "password" ? "text" : type}
      fullWidth
      margin="normal"
      error={error}
      label={
        required ? (
          <>
            {label} <RedAsterisk>*</RedAsterisk>
          </>
        ) : (
          label
        )
      }
      InputProps={{
        endAdornment: getAdornment(),
      }}
    />
  );
};

export default InputField;
