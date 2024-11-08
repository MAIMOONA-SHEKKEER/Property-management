import { Add, Send } from '@mui/icons-material';
import { Button, Card, CardContent, Checkbox, Divider, FormControlLabel, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

export const PmInvitation = ({ handleNextStep, handlePreviousStep }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Function to handle invitation sending
  const handleSendInvitation = async () => {
    if (!termsAccepted) {
      alert("Please accept the Terms and Conditions before proceeding.");
      return;
    }

    try {
      // Call the invitation API
      await axios.post('/prop-management-service/invitation/request', {
        context: 'po-to-pm',
        expirationDays: 5
      });
      alert("Invitation sent to PM successfully!");
    } catch (error) {
      console.error("Error sending invitation:", error);
      alert("Failed to send invitation. Please try again.");
    }
  };

  // Function to handle PM selection from system
  const handleSelectPMFromSystem = () => {
    alert("Selecting PM from system... (Integrate with PM selection functionality)");
    // Integrate the selection functionality here
  };

  return (
    <Card variant="outlined" sx={{ p: 3, mb: 5, backgroundColor: "#f7f9fc", borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "medium", color: "#3f51b5", mb: 2 }}>
          Step 3: Property Manager (PM) Invitation
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          You have the option to invite a Property Manager (PM) to manage the property and tenants on your behalf. This step is optional.
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12}>
            <Button
              fullWidth
              startIcon={<Send />}
              onClick={handleSendInvitation}
              disabled={!termsAccepted}
            >
              Send Invitation to PM
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              startIcon={<Add />}
              onClick={handleSelectPMFromSystem}
            >
              Select PM from System
            </Button>
          </Grid>
        </Grid>

        <Typography variant="caption" display="block" color="textSecondary" sx={{ mb: 2 }}>
          Invitations are valid for 5 days. You can extend the validity period if needed.
        </Typography>

        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          Once a PM accepts the invitation, they will have full permissions to manage this property and onboard tenants. They must accept terms and conditions to proceed.
        </Typography>

        <FormControlLabel
          control={
            <Checkbox
              required
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          }
          label="I accept the Terms and Conditions on behalf of the invited PM"
          sx={{ mt: 2 }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleNextStep}
          disabled={!termsAccepted}
        >
          Next
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mt: 2, color: '#3f51b5' }}
          onClick={handlePreviousStep}
        >
          Back to Legal Terms
        </Button>
      </CardContent>
    </Card>
  );
};
