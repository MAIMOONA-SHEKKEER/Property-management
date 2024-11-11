import React, { useState } from "react";
import { Box, Typography, Divider, Alert, Tooltip, Chip } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledButton } from "../styled/StyledButton";
import StyledCard from "../styled/StyledCard";
import InputField from "../styled/InputField";
import theme from "../../styles/globalStyles";
import StyledTypography from "../styled/StyledTypography";

function LeaseAgreementTemplates({ handleNextStep, handlePreviousStep }) {
  const [leaseTemplates, setLeaseTemplates] = useState([]);
  const [emailTemplate, setEmailTemplate] = useState("");
  const [templateFiles, setTemplateFiles] = useState([]);
  const [warning, setWarning] = useState(false);
  const [isEmailTemplateSaved, setIsEmailTemplateSaved] = useState(false);

  const maxTemplates = 6;

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setTemplateFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleUploadTemplate = () => {
    if (leaseTemplates.length + templateFiles.length > maxTemplates) {
      setWarning(true);
      const filesToAdd = [...leaseTemplates, ...templateFiles].slice(
        -maxTemplates
      );
      setLeaseTemplates(filesToAdd);
    } else {
      setLeaseTemplates((prev) => [...prev, ...templateFiles]);
    }
    console.log(
      "Uploading files:",
      templateFiles.map((file) => file.name)
    );
    setTemplateFiles([]);
  };

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
            Maximum template limit reached. The oldest templates will be
            replaced.
          </Alert>
        )}

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Upload Lease Agreement Template(s)
        </Typography>

        <InputField
          type="file"
          multiple
          fullWidth
          onChange={handleFileChange}
          inputProps={{ multiple: true }}
        />

        <StyledButton
          variant="contained"
          sx={{ mb: 2 }}
          onClick={handleUploadTemplate}
          disabled={templateFiles.length === 0}
        >
          Upload Templates
          <UploadIcon sx={{ ml: 1 }} />
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
        <Tooltip title="Enter the content for the email body here">
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
        </Tooltip>
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
          Back to Application to lease template
        </StyledButton>
      </StyledCard>
    </Box>
  );
}

export default LeaseAgreementTemplates;
