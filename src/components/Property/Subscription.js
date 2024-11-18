import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import StyledTypography from "../styled/StyledTypography";
import SubscriptionOptions from "./SubscriptionOptions";
import BackIcon from "../styled/BackIcon";
import NextButton from "../styled/NextButton";
import SkipButton from "../styled/SkipButton";
import CustomSubtitle from "../styled/CustomSubtitle";

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
        <BackIcon onClick={handlePreviousStep} />
        <StyledTypography>Step 4: Subscription</StyledTypography>
        <Divider sx={{ mb: 2 }} />
        <CustomSubtitle
          text="Select a subscription model for our rental management app. Enjoy the
          first month free!"
        />
        <StyledButton fullWidth sx={{ mb: 2 }} onClick={handleOpenModal}>
          View Subscription Options
        </StyledButton>
        <Typography variant="caption" display="block" color="textSecondary">
          Your selected subscription will take effect once the property is
          active.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <SkipButton onClick={handleSkipStep} sx={{ flex: 1, ml: 1 }} />
          <NextButton onClick={handleNextStep} sx={{ flex: 1, ml: 1 }} />
        </Box>
      </>

      <SubscriptionOptions
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onActivateSubscription={handleActivateSubscription}
      />
    </>
  );
};
