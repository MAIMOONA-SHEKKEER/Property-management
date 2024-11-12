import React from "react";
import { TextField, InputAdornment, IconButton, styled } from "@mui/material";
import { Phone, Email, VisibilityOff, Visibility, Search } from "@mui/icons-material";

export const RedAsterisk = styled("span")({
  color: "red",
});

const InputField = ({
  type,
  label,
  required,
  onClick,
  showPassword,
  error,
  value,
  name,
  multiline = false,
  minRows,
  onChange,
  placeHolder,
  helperText,
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
      case "search":
        return (
          <InputAdornment position="end">
            <IconButton aria-label="search">
              <Search />
            </IconButton>
          </InputAdornment>
        );
      default:
        return null;
    }
  };

  return (
    <TextField
      {...props}
      type={showPassword && type === "password" ? "text" : type}
      fullWidth
      sx={{ maxWidth: 500 }}
      margin="normal"
      error={error}
      value={value}
      name={name}
      label={required ? (
        <>
          {label} <RedAsterisk>*</RedAsterisk>
        </>
      ) : (
        label
      )}
      InputProps={{
        endAdornment: getAdornment(),
      }}
      multiline={multiline}
      minRows={multiline && minRows ? minRows : 1}
      helperText={helperText}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
};

export default InputField;
