import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StyledHeading from "../styled/StyledHeading";
import StyledSnackbar from "../styled/StyledSnackbar";
import { StyledButton } from "../styled/StyledButton";

const ReviewOutcome = ({ application, onPrevStep }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleApprove = () => {
    showSnackbar(`Application ${application.id} Approved`, "success");
  };

  const handleConditionallyApprove = () => {
    const comments = prompt("Enter comments for conditional approval:");
    if (!comments) return;
    showSnackbar(
      `Application ${application.id} Conditionally Approved with comments: ${comments}`,
      "info"
    );
  };

  const handleDecline = () => {
    showSnackbar(`Application ${application.id} Declined`, "error");
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "80vh",
      }}
    >
      <StyledHeading>Application Outcome</StyledHeading>
      <Card
        sx={{ maxWidth: 350, width: "100%", boxShadow: 4, borderRadius: 2 }}
      >
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            gutterBottom
          >
            Please select an action for Application ID: {application.id}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack spacing={2} direction="column" sx={{ width: 300, p: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleApprove}
              fullWidth
            >
              Approve
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleConditionallyApprove}
              fullWidth
            >
              Conditionally Approve
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDecline}
              fullWidth
            >
              Decline
            </Button>
          </Stack>
        </CardActions>
      </Card>
      <StyledButton
        variant="contained"
        fullWidth
        sx={{ mt: 3, backgroundColor: "#3f51b5", maxWidth: 500 }}
        onClick={() => (window.location.href = "/backoffice-dashboard")}
      >
        Done
      </StyledButton>
      <StyledButton
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={onPrevStep}
        fullWidth
        sx={{ mt: 2, maxWidth: 500 }}
      >
        Back
      </StyledButton>
      <StyledSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </Box>
  );
};

export default ReviewOutcome;
