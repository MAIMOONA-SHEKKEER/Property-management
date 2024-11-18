import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";
import CheckboxWithLabel from "../styled/CheckboxWithLabel";
import StyledTypography from "../styled/StyledTypography";
import BackIcon from "../styled/BackIcon";
import NextButton from "../styled/NextButton";

export const LegalTerms = ({ handleNextStep, handlePreviousStep }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsAccepted(event.target.checked);
  };

  return (
    <>
      <BackIcon onClick={handlePreviousStep} />
      <StyledTypography> Step 2: Legal Terms</StyledTypography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        Accept our terms and conditions to proceed with the property
        registration.
        <ul>
          <li>
            Applicant or Applicants acknowledge this application will form part
            of the lease agreement when approved. If any information is found to
            be incorrect, the application will be rejected and any subsequent
            rental agreement becomes void. False and misleading statements will
            be sufficient reason for immediate eviction and loss of deposit.
          </li>
          <li>
            No agreement shall be deemed to exist between the Landlord and/or
            his agent and the Applicant and/or Applicants until the lease
            agreement has been duly signed by, or on behalf of the Landlord, and
            monies paid.
          </li>
        </ul>
      </Typography>
      <CheckboxWithLabel
        label="I accept the Terms and Conditions"
        isChecked={isAccepted}
        onChange={handleCheckboxChange}
        required
      />
      <NextButton onClick={handleNextStep} disabled={!isAccepted} />
    </>
  );
};
