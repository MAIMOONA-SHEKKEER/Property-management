import React, { useState } from "react";
import { Typography, Divider, Alert, CircularProgress } from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import StyledTypography from "../styled/StyledTypography";

function ApplicationSubmission({ handleNextStep, handlePreviousStep }) {
  const [loading, setLoading] = useState(false);
  const propertyId = useState("QA123");
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitApplication = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      localStorage.setItem("applicationSubmitted", "true");
      localStorage.setItem("propertyId", propertyId);
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

  return (<>
      <StyledTypography>Step 8: Application Submission</StyledTypography>
      <Divider sx={{ mb: 3 }} />
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
        </>
      ) : (
        <>
          <Typography variant="body2" color="textSecondary">
            You have successfully submitted your application.Your application is
            now in review. You can track the status using the property ID{" "}
            <strong>{propertyId}</strong>
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
      )}</>
  );
}

export default ApplicationSubmission;
