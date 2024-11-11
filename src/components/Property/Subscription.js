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
        <StyledButton>View Subscription Options</StyledButton>
        <StyledButton>Activate Subscription</StyledButton>
        <Typography
          variant="caption"
          display="block"
          color="textSecondary"
          sx={{ mb: 2 }}
        >
          Your selected subscription will take effect once the property is
          active.
        </Typography>

        <StyledButton
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleNextStep}
        >
          Next
        </StyledButton>

        <StyledButton
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => handleSkipStep(4)}
        >
          Skip
        </StyledButton>

        <StyledButton
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handlePreviousStep}
        >
          Back to PM Invitation
        </StyledButton>
      </StyledCard>
    </>
  );
};
