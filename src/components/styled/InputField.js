import React from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  styled,
} from "@mui/material";
import {
  Phone,
  Email,
  VisibilityOff,
  Visibility,
  AttachFile
} from "@mui/icons-material";

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
  multiple = false,
  onChange,
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
      case "file":
        return (
          <InputAdornment position="start">
            <AttachFile />
          </InputAdornment>
        );
      default:
        return null;
    }
  };

  return (
    <TextField
      {...props}
      type={type === "file" ? "file" : showPassword && type === "password" ? "text" : type}
      fullWidth sx={{ maxWidth:500}}
      margin="normal"
      error={error}
      value={value}
      name={name}
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
      inputProps={{
        multiple: multiple && type === "file", 
      }}
      multiline={multiline}
      minRows={multiline && minRows ? minRows : 1}
      onChange={onChange}
    />
  );
};

export default InputField;
