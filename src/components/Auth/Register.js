import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Snackbar,
  Alert,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthRedirect from "../styled/AuthRedirect";
import { UploadFile } from "@mui/icons-material";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    role: "ADMIN",
    cellphoneNr: "",
    proxyLetter: null,
  });

  const [snackbar, setSnackbar] = useState({ open: false, message: "", type: "" });
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

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box spacing={2}>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Full Name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
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
              </TextField>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" mt={2} mb={3}>
              <Button
                variant="contained"
                component="label"
                startIcon={<UploadFile />}
              >
                Upload Proxy Letter
                <input
                  type="file"
                  name="proxyLetter"
                  accept=".pdf"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
            </Box>
            <Typography variant="body2" color="textSecondary" align="center">
              After successful registration, you’ll receive an email for verification.
            </Typography>
            <Box mt={2}>
              <Button fullWidth type="submit" variant="contained" color="primary">
                Register
              </Button>
            </Box>
          </Box>
        </form>
        <AuthRedirect
          message="Already have an account?"
          linkText="Login"
          navigateTo="/"
        />
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.type}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RegistrationForm;
