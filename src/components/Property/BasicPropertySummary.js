import { UploadFile } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledButton } from "../styled/StyledButton";

const BasicPropertySummary = ({ handleNextStep }) => {
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
            Step 1: Basic Property Summary
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Please provide basic details to create a new property application.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Property Alias" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Property Type"
                fullWidth
                variant="outlined"
                placeholder="Select from available types"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Company Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Property Address"
                fullWidth
                variant="outlined"
                placeholder="Use Google API for accuracy"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledButton component="label" startIcon={<UploadFile />}>
                Upload Supporting Documents
                <input hidden multiple type="file" />
              </StyledButton>
              <Typography
                variant="caption"
                display="block"
                color="textSecondary"
              >
                Optional uploads: ID, Title Deed, Proof of Residence, or CIPC
                document (if property belongs to a company).
              </Typography>
            </Grid>
          </Grid>
          <StyledButton
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleNextStep}
          >
            Next
          </StyledButton>
        </CardContent>
      </Card>
    </>
  );
};

export default BasicPropertySummary;
