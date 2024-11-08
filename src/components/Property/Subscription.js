import React from "react";
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { StyledButton } from "../styled/StyledButton";

export const Subscription = ({ handleNextStep, handlePreviousStep }) => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{ p: 3, mb: 5, backgroundColor: "#f7f9fc", borderRadius: 2 }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{ fontWeight: "medium", color: "#3f51b5", mb: 2 }}
          >
            Step 4: Subscription
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Please select your desired subscription model for our rental
            management app. The first month is free!
          </Typography>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12}>
              <StyledButton>View Subscription Options</StyledButton>

              <StyledButton>Activate Subscription</StyledButton>
            </Grid>
          </Grid>

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
            onClick={handlePreviousStep}
          >
            Back to PM Invitation
          </StyledButton>
        </CardContent>
      </Card>
    </>
  );
};
