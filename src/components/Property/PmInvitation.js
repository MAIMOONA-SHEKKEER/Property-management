import React, { useState } from "react";
import { Add, Send } from "@mui/icons-material";
import { CardContent, Divider, Typography } from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import StyledCard from "../styled/StyledCard";
import CheckboxWithLabel from "../styled/CheckboxWithLabel";

export const PmInvitation = ({ handleNextStep, handlePreviousStep }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSendInvitation = async () => {
    if (!termsAccepted) {
      alert("Please accept the Terms and Conditions before proceeding.");
      return;
    }
    try {
      // Replace the alert with an actual API call for sending the invitation
      // Example: await sendPmInvitation();
      alert("Invitation sent to the Property Manager successfully!");
    } catch (error) {
      console.error("Error sending invitation:", error);
      alert("Failed to send the invitation. Please try again.");
    }
  };

  const handleSelectPMFromSystem = () => {
    // Add functionality for selecting PM from the system
    alert("Selecting Property Manager from the system...");
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontWeight: "medium", color: "#3f51b5", mb: 2 }}
        >
          Step 3: Property Manager (PM) Invitation
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          You have the option to invite a Property Manager (PM) to manage the
          property and tenants on your behalf. This step is optional.
        </Typography>

        {/* Button to send invitation */}
        <StyledButton
          fullWidth
          startIcon={<Send />}
          onClick={handleSendInvitation}
          disabled={!termsAccepted}
        >
          Send Invitation to PM
        </StyledButton>

        {/* Button to select a PM from the system */}
        <StyledButton
          fullWidth
          startIcon={<Add />}
          onClick={handleSelectPMFromSystem}
        >
          Select PM from System
        </StyledButton>

        {/* Information about invitation validity */}
        <Typography
          variant="caption"
          display="block"
          color="textSecondary"
          sx={{ mb: 2 }}
        >
          Invitations are valid for 5 days. You can extend the validity period
          if needed.
        </Typography>

        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          Once a PM accepts the invitation, they will have full permissions to
          manage this property and onboard tenants. They must accept the terms and
          conditions to proceed.
        </Typography>

        {/* Checkbox to accept terms */}
        <CheckboxWithLabel
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          required
          label="I accept the Terms and Conditions on behalf of the invited PM"
        />

        {/* Next and Back buttons */}
        <StyledButton
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleNextStep}
          disabled={!termsAccepted}
        >
          Next
        </StyledButton>
        <StyledButton
          variant="outlined"
          fullWidth
          sx={{ mt: 2, color: "#3f51b5" }}
          onClick={handlePreviousStep}
        >
          Back
        </StyledButton>
      </CardContent>
    </StyledCard>
  );
};
