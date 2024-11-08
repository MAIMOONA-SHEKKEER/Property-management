import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  Alert,
  CircularProgress,
  Grid,
} from "@mui/material";

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
    <Box sx={{ p: 3 }}>
      <Card
        variant="outlined"
        sx={{ p: 3, mb: 5, backgroundColor: "#f7f9fc", borderRadius: 2 }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{ fontWeight: "medium", color: "#3f51b5", mb: 2 }}
          >
            Step 8: Application Submission
          </Typography>
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
                Ready to submit your application? Ensure all details are
                accurate, then click below to complete your submission.
              </Typography>
              <Button
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
              </Button>

              <Button
                variant="outlined"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handlePreviousStep}
              >
                Back to Property Setup Configuration
              </Button>
            </>
          ) : (
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Application Tracking
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Your application is now in review. You can track the status
                  using property ID
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 3 }}
                  onClick={() => (window.location.href = "/pm-dashboard")}
                >
                  Done
                </Button>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default ApplicationSubmission;
