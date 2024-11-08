import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  MenuItem,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthRedirect from "../styled/AuthRedirect";
import { UploadFile } from "@mui/icons-material";
import { StyledButton } from "../styled/StyledButton";
import StyledHeading from "../styled/StyledHeading";
import StyledWrapper from "../styled/StyledWrapper";
import InputField from "../styled/InputField";
import StyledSnackbar from "../styled/StyledSnackbar";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    role: "PO",
    cellphoneNr: "",
    proxyLetter: null,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      setFormData((prevData) => ({ ...prevData, proxyLetter: files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8085/api/auth/register",
        formData
      );
      setSnackbar({ open: true, message: response.data, type: "success" });
      setTimeout(() => {
        navigate("/");
      }, 6000);
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.response?.data || "Registration failed",
        type: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <StyledWrapper>
      <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
        <StyledHeading align="center">Register</StyledHeading>
        <form onSubmit={handleSubmit}>
          <Box spacing={2}>
            <InputField
              label="Full Name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />

            <InputField
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <InputField
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onClick={handleClickShowPassword}
              showPassword={showPassword}
              required
            />

            <InputField
              select
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <MenuItem value="ADMIN">Admin</MenuItem>
              <MenuItem value="PO">Property Owner</MenuItem>
              <MenuItem value="PM">Property Manager</MenuItem>
              <MenuItem value="tenant">Tenant</MenuItem>
            </InputField>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={2}
              mb={3}
            >
              <StyledButton component="label" startIcon={<UploadFile />}>
                Upload Proxy Letter
                <input
                  type="file"
                  name="proxyLetter"
                  accept=".pdf"
                  hidden
                  onChange={handleFileChange}
                />
              </StyledButton>
            </Box>
            <Typography variant="body2" color="textSecondary" align="center">
              After successful registration, you’ll receive an email for
              verification.
            </Typography>
            <Box mt={2}>
              <StyledButton fullWidth type="submit" variant="contained">
                Register
              </StyledButton>
            </Box>
          </Box>
        </form>
        <AuthRedirect
          message="Already have an account?"
          linkText="Login"
          navigateTo="/"
        />
      </Paper>
      <StyledSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </StyledWrapper>
  );
};

export default RegistrationForm;
