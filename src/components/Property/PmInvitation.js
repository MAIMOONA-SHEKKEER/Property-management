import React, { useState, useEffect } from "react";
import { Add, Send } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import CheckboxWithLabel from "../styled/CheckboxWithLabel";
import StyledTypography from "../styled/StyledTypography";
import SelectPMModal from "./SelectPMModal";

export const PmInvitation = ({ handleNextStep, handlePreviousStep }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [invitationSent, setInvitationSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSendInvitationEnabled, setSendInvitationEnabled] = useState(false);
  const [selectedPM, setSelectedPM] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setSendInvitationEnabled(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendInvitation = async () => {
    try {
      alert("Invitation sent to the Property Manager successfully!");
      setInvitationSent(true);
    } catch (error) {
      console.error("Error sending invitation:", error);
      alert("Failed to send the invitation. Please try again.");
    }
  };

  const handleSelectPMFromSystem = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePmSelection = (pm) => {
    setSelectedPM(pm);
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledTypography>
        Step 3: Property Manager (PM) Invitation
      </StyledTypography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        You have the option to invite a Property Manager (PM) to manage the
        property and tenants on your behalf. This step is optional.
      </Typography>
      <StyledButton
        fullWidth
        startIcon={<Send />}
        onClick={handleSendInvitation}
        disabled={!isSendInvitationEnabled || termsAccepted}
      >
        Send Invitation to PM
      </StyledButton>
      <StyledButton
        fullWidth
        startIcon={<Add />}
        onClick={handleSelectPMFromSystem}
      >
        Select PM from System
      </StyledButton>

      {selectedPM && (
        <Typography
          variant="subtitle2"
          color="success"
          sx={{ mt: 2, fontWeight: "bold" }}
        >
          Selected Property Manager: {selectedPM.name} ({selectedPM.email})
        </Typography>
      )}

      <Typography
        variant="caption"
        display="block"
        color="textSecondary"
        sx={{ mb: 2 }}
      >
        Invitations are valid for 5 days. You can extend the validity period if
        needed.
      </Typography>

      <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
        Once a PM accepts the invitation, they will have full permissions to
        manage this property and onboard tenants. They must accept the terms and
        conditions to proceed.
      </Typography>
      <CheckboxWithLabel
        checked={termsAccepted}
        onChange={(e) => setTermsAccepted(e.target.checked)}
        required
        label="I accept the Terms and Conditions on behalf of the invited PM"
        disabled={!isSendInvitationEnabled || invitationSent}
      />
      <StyledButton
        variant="contained"
        fullWidth
        onClick={handleNextStep}
        disabled={!termsAccepted && !invitationSent}
      >
        Next
      </StyledButton>
      <StyledButton variant="outlined" fullWidth onClick={handlePreviousStep}>
        Back
      </StyledButton>

      <SelectPMModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSelectPM={handlePmSelection}
      />
    </>
  );
};
