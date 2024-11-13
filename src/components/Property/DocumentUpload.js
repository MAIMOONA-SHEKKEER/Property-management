import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import StyledTypography from "../styled/StyledTypography";
import FileInputField from "../styled/FileInputField";

const DocumentUpload = ({ handleNextStep, handlePreviousStep }) => {
  const [documents, setDocuments] = useState({
    idDocument: null,
    titleDeed: null,
    proofOfResidence: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!documents.idDocument) {
      newErrors.idDocument = "ID Document is required";
    }
    if (!documents.titleDeed) {
      newErrors.titleDeed = "Title Deed is required";
    }
    if (!documents.proofOfResidence) {
      newErrors.proofOfResidence = "Proof of Residence is required";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocuments((prevState) => ({ ...prevState, [name]: value }));

    if (errors[name]) {
      setErrors((prevState) => ({ ...prevState, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    // if (Object.keys(validationErrors).length === 0) {
    handleNextStep(documents);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
        <StyledTypography>Step 8: Upload Supporting Documents</StyledTypography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Please upload documents to complete property registration. Ensure
          these documents verify the legal ownership of the property.
        </Typography>

        <FileInputField
          label="Upload ID Document"
          name="idDocument"
          required
          error={!!errors.idDocument}
          helperText={errors.idDocument}
          value={documents.idDocument}
          onChange={handleChange}
        />

        <FileInputField
          label="Upload Title Deed"
          name="titleDeed"
          required
          value={documents.titleDeed}
          error={!!errors.titleDeed}
          helperText={errors.titleDeed}
          onChange={handleChange}
        />

        <FileInputField
          label="Upload Proof of Residence"
          name="proofOfResidence"
          value={documents.proofOfResidence}
          required
          error={!!errors.proofOfResidence}
          helperText={errors.proofOfResidence}
          onChange={handleChange}
        />

        <StyledButton
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          type="submit"
        >
          Next
        </StyledButton>

        <StyledButton
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handlePreviousStep}
        >
          Back
        </StyledButton>
    </form>
  );
};

export default DocumentUpload;
