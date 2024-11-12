import React, { useState } from "react";
import { Box, Typography, Divider, Alert, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledButton } from "../styled/StyledButton";
import StyledCard from "../styled/StyledCard";
import theme from "../../styles/globalStyles";
import StyledTypography from "../styled/StyledTypography";
import FileInputField from "../styled/FileInputField";  // Importing the custom FileInputField
import InputField from "../styled/InputField";

function LeaseAgreementTemplates({ handleNextStep, handlePreviousStep }) {
  const [leaseTemplates, setLeaseTemplates] = useState([]);
  const [templateFiles, setTemplateFiles] = useState([]);
  const [warning, setWarning] = useState(false);
  const [isEmailTemplateSaved, setIsEmailTemplateSaved] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState("");  // Added emailTemplate state
  const maxTemplates = 6;

  // Handle the file change, ensuring it doesn't exceed maxTemplates
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Check if selecting exceeds the maxTemplates limit
    if (leaseTemplates.length + selectedFiles.length > maxTemplates) {
      setWarning(true);
      const excessFiles = leaseTemplates.length + selectedFiles.length - maxTemplates;
      setTemplateFiles(selectedFiles.slice(0, selectedFiles.length - excessFiles));
    } else {
      setWarning(false);
      setTemplateFiles(selectedFiles);
    }
  };

  // Handle uploading files
  const handleUploadTemplate = () => {
    if (leaseTemplates.length + templateFiles.length <= maxTemplates) {
      setLeaseTemplates((prev) => [...prev, ...templateFiles]);
    } else {
      setWarning(true);
      const filesToAdd = [...leaseTemplates, ...templateFiles].slice(-maxTemplates);
      setLeaseTemplates(filesToAdd);
    }
    setTemplateFiles([]);
  };

  // Remove a template by index
  const handleRemoveTemplate = (index) => {
    setLeaseTemplates((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEmailTemplateChange = (e) => {
    setEmailTemplate(e.target.value);
  };

  const handleSaveEmailTemplate = () => {
    console.log("Saving email template:", emailTemplate);
    setIsEmailTemplateSaved(true);
  };

  return (
    <Box sx={{ p: 3 }}>
      <StyledCard>
        <StyledTypography>
          Step 7: Property Lease Agreement Templates
        </StyledTypography>
        <Divider sx={{ mb: 3 }} />

        {warning && (
          <Alert
            severity="warning"
            onClose={() => setWarning(false)}
            sx={{ mb: 2 }}
          >
            Maximum template limit reached. The oldest templates will be replaced.
          </Alert>
        )}

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Upload Lease Agreement Template(s)
        </Typography>

        <FileInputField
          onChange={handleFileChange}
          multiple
          disabled={templateFiles.length === 0}
          label="Choose files to upload"
        />

        <StyledButton
          variant="contained"
          sx={{ mb: 2 }}
          onClick={handleUploadTemplate}
          disabled={templateFiles.length === 0}
        >
          Upload Templates
        </StyledButton>

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Uploaded Lease Agreement Templates
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {leaseTemplates.map((template, index) => (
            <Chip
              key={index}
              label={template.name || `Template ${index + 1}`}
              variant="outlined"
              onDelete={() => handleRemoveTemplate(index)}
              deleteIcon={<DeleteIcon />}
              sx={{
                maxWidth: 250,
                height: 40,
                display: "flex",
                alignItems: "center",
                color: theme.palette.primary.main,
              }}
            />
          ))}
        </Box>

        <Typography
          variant="h6"
          sx={{ fontWeight: "medium", color: "#3f51b5", mt: 4, mb: 1 }}
        >
          Email Template for Lease Agreements
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Configure the email template to be sent with lease agreements.
        </Typography>
        <InputField
          label="Email Body"
          type="textarea"
          fullWidth
          multiline
          minRows={4}
          onChange={handleEmailTemplateChange}
          placeholder="Enter email body content..."
          variant="outlined"
        />
        <StyledButton variant="contained" onClick={handleSaveEmailTemplate}>
          Save Email Template
        </StyledButton>
        <StyledButton
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleNextStep}
          disabled={templateFiles.length === 0 && !isEmailTemplateSaved}
        >
          Next
        </StyledButton>
        <StyledButton
          variant="outlined"
          fullWidth
          sx={{ mt: 2, color: "#3f51b5" }}
          onClick={handlePreviousStep}
        >
          Back
        </StyledButton>
      </StyledCard>
    </Box>
  );
}

export default LeaseAgreementTemplates;
