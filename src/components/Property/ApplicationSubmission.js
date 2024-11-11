import React, { useState } from "react";
import {
  Typography,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import StyledCard from "../styled/StyledCard";
import StyledTypography from "../styled/StyledTypography";

function ApplicationSubmission({ handleNextStep, handlePreviousStep }) {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const propertyId = useState("");
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitApplication = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      localStorage.setItem("applicationSubmitted", "true");
      localStorage.setItem("propertyId", propertyId);

      setSuccessMessage(
        "You have successfully submitted your application. You can view your application status here."
      );
      setApplicationStatus("submitted");
    } catch (error) {
      console.error("Error during submission:", error);
      setErrorMessage(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledCard>
      <StyledTypography>Step 8: Application Submission</StyledTypography>
      <Divider sx={{ mb: 3 }} />

      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}

      {applicationStatus !== "submitted" ? (
        <>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ mb: 2, textAlign: "center" }}
          >
            Ready to submit your application? Ensure all details are accurate,
            then click below to complete your submission.
          </Typography>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleSubmitApplication}
            fullWidth
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit Application"
            )}
          </StyledButton>

          <StyledButton
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handlePreviousStep}
          >
            Back to Property Setup Configuration
          </StyledButton>
        </>
      ) : (
        <>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Application Tracking
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Your application is now in review. You can track the status using
            property ID
          </Typography>
          <StyledButton
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            onClick={() => (window.location.href = "/pm-dashboard")}
          >
            Done
          </StyledButton>
        </>
      )}
    </StyledCard>
  );
}

export default ApplicationSubmission;
