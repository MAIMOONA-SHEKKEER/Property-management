import React, { useState } from "react";
import {
  Typography,
  CircularProgress,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import StyledWrapper from "../styled/StyledWrapper";
import FormContainer from "../styled/FormContainer";
import AuthRedirect from "../styled/AuthRedirect";
import { StyledButton } from "../styled/StyledButton";
import StyledHeading from "../styled/StyledHeading";
import InputField from "../styled/InputField";

const Login = () => {
  const { login, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login({ email, password });
    setLoading(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <StyledWrapper>
      <FormContainer>
        <StyledHeading align="center">
          Login
        </StyledHeading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onClick={handleClickShowPassword}
              showPassword={showPassword}
              required
            />
          <StyledButton
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{ marginTop: 2 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </StyledButton>
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
