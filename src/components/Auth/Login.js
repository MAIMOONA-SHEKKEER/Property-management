import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import StyledWrapper from "../styled/StyledWrapper";
import FormContainer from "../styled/FormContainer";
import { useNavigate } from "react-router-dom";
import AuthRedirect from "../styled/AuthRedirect";

const Login = () => {
  const { login, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login({ email, password });
    setLoading(false);
  };

  return (
    <StyledWrapper>
      <FormContainer>
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            sx={{ marginTop: 2 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>
          {error && (
            <Typography
              variant="body2"
              color="error"
              align="center"
              sx={{ marginTop: 2 }}
            >
              {error}
            </Typography>
          )}
        </form>
        <AuthRedirect
          message="Don't have an account?"
          linkText="Register"
          navigateTo="/register"
        />
      </FormContainer>
    </StyledWrapper>
  );
};

export default Login;
