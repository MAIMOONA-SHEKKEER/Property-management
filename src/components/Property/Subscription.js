import React from "react";
import { Divider, Typography } from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import StyledCard from "../styled/StyledCard";
import StyledTypography from "../styled/StyledTypography";

export const Subscription = ({
  handleNextStep,
  handlePreviousStep,
  handleSkipStep,
}) => {
  return (
    <>
      <StyledCard>
        <StyledTypography>Step 4: Subscription</StyledTypography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Please select your desired subscription model for our rental
          management app. The first month is free!
        </Typography>
        <StyledButton variant="outlined" sx={{ mr: 1 }}>
          View Subscription Options
        </StyledButton>
        <StyledButton variant="outlined">Activate Subscription</StyledButton>
        <Typography
          variant="caption"
          display="block"
          color="textSecondary"
          sx={{ my: 2 }}
        >
          Your selected subscription will take effect once the property is
          active.
        </Typography>
        <StyledButton
          variant="outlined"
          fullWidth
          onClick={() => handleSkipStep(4)}
        >
          Skip
        </StyledButton>
        <StyledButton variant="contained" fullWidth onClick={handleNextStep}>
          Next
        </StyledButton>

        <StyledButton variant="outlined" fullWidth onClick={handlePreviousStep}>
          Back
        </StyledButton>
      </StyledCard>
    </>
  );
};
