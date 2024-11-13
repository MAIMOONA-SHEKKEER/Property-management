import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import StyledTypography from "../styled/StyledTypography";
import SubscriptionOptions from "./SubscriptionOptions";

export const Subscription = ({
  handleNextStep,
  handlePreviousStep,
  handleSkipStep,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleActivateSubscription = () => {
    alert("Subscription activated successfully!");
    setIsModalOpen(false);
  };

  return (
    <>
      <>
        <StyledTypography>Step 4: Subscription</StyledTypography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Select a subscription model for our rental management app. Enjoy the
          first month free!
        </Typography>

        <StyledButton fullWidth sx={{ mb: 2 }} onClick={handleOpenModal}>
          View Subscription Options
        </StyledButton>

        <Typography variant="caption" display="block" color="textSecondary">
          Your selected subscription will take effect once the property is
          active.
        </Typography>

        <StyledButton
          variant="outlined"
          fullWidth
          onClick={() => handleSkipStep(4)}
          sx={{ mb: 1 }}
        >
          Skip
        </StyledButton>
        <StyledButton
          variant="contained"
          fullWidth
          onClick={handleNextStep}
          sx={{ mb: 1 }}
        >
          Next
        </StyledButton>
        <StyledButton variant="outlined" fullWidth onClick={handlePreviousStep}>
          Back
        </StyledButton>
      </>

      <SubscriptionOptions
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onActivateSubscription={handleActivateSubscription}
      />
    </>
  );
};
