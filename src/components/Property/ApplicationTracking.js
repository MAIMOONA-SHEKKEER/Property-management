import React, { useState } from "react";
import {
  Typography,
  Divider,
  CircularProgress,
  Alert,
  Paper,
} from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import StyledTypography from "../styled/StyledTypography";
import SearchInput from "../styled/SearchInput";
import StyledCard from "../styled/StyledCard";

const ApplicationTracking = () => {
  const [loading, setLoading] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fetchApplicationStatus = async (propertyId) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = "progress";
      setApplicationStatus(response);
      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage(
        "Failed to fetch application status. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (propertyId) {
      fetchApplicationStatus(propertyId);
    } else {
      setErrorMessage("Please enter a valid Property ID.");
    }
  };

  return (
    <StyledCard>
      <StyledTypography>Application Status Tracking</StyledTypography>
      <Divider sx={{ mb: 3 }} />
      <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
        Enter your Property ID to check the application status:
      </Typography>
      <SearchInput
        value={propertyId}
        onChange={setPropertyId}
        onSearch={handleSearch}
        label="Property ID"
        placeholder="Enter Property ID"
        required
      />

      {errorMessage && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {errorMessage}
        </Alert>
      )}
      {loading && (
        <CircularProgress
          color="primary"
          sx={{ display: "block", mx: "auto", mt: 3 }}
        />
      )}
      {isSubmitted && !loading && (
        <>
          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
            Application Status:
          </Typography>
          <Paper
            sx={{
              p: 2,
              backgroundColor: "#e3f2fd",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="body2">
              Your application status is in <strong>{applicationStatus}</strong>
            </Typography>
          </Paper>
          <StyledButton
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            onClick={() => (window.location.href = "/pm-dashboard")}
          >
            Go to Dashboard
          </StyledButton>
        </>
      )}
    </StyledCard>
  );
};

export default ApplicationTracking;
