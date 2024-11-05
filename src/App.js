import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import TenantDashboard from "./components/Dashboard/TenantDashboard";
import PmDashboard from "./components/Dashboard/PmDashboard";
import BackOfficeDashboard from "./components/Dashboard/BackOfficeDashboard";
import PrivateRoute from "./components/Auth/PrivateRoute";
import RegistrationForm from "./components/Auth/Register";
import { ThemeProvider } from "styled-components";
import theme from "./styles/globalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route
            path="/tenant-dashboard"
            element={
              <PrivateRoute roles={["tenant"]} element={<TenantDashboard />} />
            }
          />
          <Route
            path="/pm-dashboard"
            element={
              <PrivateRoute roles={["PO", "PM"]} element={<PmDashboard />} />
            }
          />
          <Route
            path="/backoffice-dashboard"
            element={
              <PrivateRoute
                roles={["ADMIN"]}
                element={<BackOfficeDashboard />}
              />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
