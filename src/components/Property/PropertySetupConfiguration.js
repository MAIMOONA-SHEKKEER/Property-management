import React from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { StyledButton } from "../styled/StyledButton";

const PropertySetupConfiguration = ({
  handleChange,
  handleSubmitAdditionalDetails,
  additionalDetails,
  handleNextStep,
  handlePreviousStep
}) => {
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
            Step 5: Property Setup Configuration
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Total Units"
                name="totalUnits"
                fullWidth
                variant="outlined"
                value={additionalDetails.totalUnits}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Unit Types (e.g., 1BHK, 2BHK)"
                name="unitTypes"
                fullWidth
                variant="outlined"
                value={additionalDetails.unitTypes}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Rental Amount"
                name="rentalAmount"
                fullWidth
                variant="outlined"
                value={additionalDetails.rentalAmount}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Rental Deposit"
                name="rentalDeposit"
                fullWidth
                variant="outlined"
                value={additionalDetails.rentalDeposit}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Rental Extras"
                name="rentalExtras"
                fullWidth
                variant="outlined"
                value={additionalDetails.rentalExtras}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Admin Fee"
                name="adminFee"
                fullWidth
                variant="outlined"
                value={additionalDetails.adminFee}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <StyledButton
            variant="outlined"
            onClick={handleSubmitAdditionalDetails}
            sx={{ mt: 3}}
          >
            Submit Additional Details
          </StyledButton>
          <StyledButton
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
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
            Back to Subscription
          </StyledButton>
        </CardContent>
      </Card>
    </>
  );
};

export default PropertySetupConfiguration;
