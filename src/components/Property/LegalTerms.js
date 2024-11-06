import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";

export const LegalTerms = ({ handleNextStep, handlePreviousStep }) => {
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
            Step 2: Legal Terms
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Accept our terms and conditions to proceed with the property
            registration.
            <ul>
              <li>
                Applicant or Applicants acknowledge this application will form
                part of the lease agreement when approved. If any information is
                found to be incorrect, the application will be rejected and any
                subsequent rental agreement becomes void. False and misleading
                statements will be sufficient reason for immediate eviction and
                loss of deposit.
              </li>
              <li>
                {" "}
                No agreement shall be deemed to exist between the Landlord
                and/or his agent and the Applicant and/or Applicants until the
                lease agreement has been duly signed by, or on behalf of the
                Landlord, and monies paid,
              </li>
            </ul>
          </Typography>
          <FormControlLabel
            control={<Checkbox required />}
            label="I accept the Terms and Conditions"
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleNextStep}
          >
            Next
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 2, color: "#3f51b5" }}
            onClick={handlePreviousStep}
          >
            Back to Property Summary
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
