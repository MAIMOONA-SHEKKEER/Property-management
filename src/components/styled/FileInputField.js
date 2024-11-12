import React, { useState, useRef } from "react";
import { InputAdornment, IconButton, styled, TextField } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import { RedAsterisk } from "./InputField";

const HiddenInput = styled("input")({
  display: "none",
});

const FileInputField = ({
  label,
  required,
  error,
  value,
  name,
  multiple = false,
  onChange,
  helperText,
  ...props
}) => {
  const fileInputRef = useRef(null);
  const [fileNames, setFileNames] = useState([]);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newFileNames = files.map((file) => file.name);
      setFileNames(newFileNames);

      // Pass the file data to the parent component via the `onChange` callback
      if (onChange) {
        onChange(e, files);  // Pass the selected files to the parent
      }
    }
  };

  return (
    <>
      <HiddenInput
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        multiple={multiple}
      />
      <TextField
        {...props}
        type="text"
        fullWidth
        sx={{ maxWidth: 500 }}
        margin="normal"
        error={error}
        value={fileNames.length > 0 ? `${fileNames.join(", ")}` : ""}
        name={name}
        onChange={onChange}  // Keep this to handle non-file input changes
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
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="upload file"
                onClick={handleFileClick}
                edge="start"
              >
                <AttachFile />
              </IconButton>
            </InputAdornment>
          ),
          readOnly: true, // Ensures text field is readonly
        }}
        helperText={helperText}
      />
    </>
  );
};

export default FileInputField;
