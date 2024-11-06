import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  CircularProgress,
  Alert,
  TextField,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import { Search } from "@mui/icons-material"; 

function ApplicationTracking() {
  const [loading, setLoading] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 

  useEffect(() => {
    const storedPropertyId = localStorage.getItem("propertyId");
    if (storedPropertyId) {
      setPropertyId(storedPropertyId); 
    }
  }, []);

  const fetchApplicationStatus = async (propertyId) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = "Your application status is in progress";
      setApplicationStatus(response);
      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage("Failed to fetch application status. Please try again later.");
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
    <Box sx={{ p: 3 }}>
      <Card variant="outlined" sx={{ p: 3, mb: 5, backgroundColor: "#f7f9fc", borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#3f51b5", mb: 2 }}>
            Application Status Tracking
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {/* Property ID Input */}
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            Enter your Property ID to check the application status:
          </Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={9}>
              <TextField
                label="Property ID"
                fullWidth
                value={propertyId}
                onChange={(e) => setPropertyId(e.target.value)}
                sx={{ mt: 1 }}
              />
            </Grid>
            <Grid item xs={3}>
              <IconButton
                color="primary"
                onClick={handleSearch}
                sx={{
                  backgroundColor: "#3f51b5",
                  color: "white",
                  borderRadius: 2,
                  padding: 1,
                  "&:hover": {
                    backgroundColor: "#303f9f",
                  },
                }}
              >
                <Search />
              </IconButton>
            </Grid>
          </Grid>

          {errorMessage && (
            <Alert severity="error" sx={{ mt: 3 }}>
              {errorMessage}
            </Alert>
          )}

          {loading && <CircularProgress color="primary" sx={{ display: "block", mx: "auto", mt: 3 }} />}

          {isSubmitted && !loading && (
            <>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
                Application Status:
              </Typography>
              <Paper sx={{ p: 2, backgroundColor: "#e3f2fd", borderRadius: 2, boxShadow: 1 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>{applicationStatus}</strong>
                </Typography>
              </Paper>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 3 }}
                onClick={() => (window.location.href = "/pm-dashboard")}
              >
                Go to Dashboard
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default ApplicationTracking;
