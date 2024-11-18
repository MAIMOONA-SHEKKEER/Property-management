import React, { useState } from "react";
import { Box, Divider, Alert, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledButton } from "../styled/StyledButton";
import theme from "../../styles/globalStyles";
import StyledTypography from "../styled/StyledTypography";
import FileInputField from "../styled/FileInputField";
import BackIcon from "../styled/BackIcon";
import NextButton from "../styled/NextButton";
import CustomSubtitle from "../styled/CustomSubtitle";

function LeaseAgreementTemplates({ handleNextStep, handlePreviousStep }) {
  const [leaseTemplates, setLeaseTemplates] = useState([]);
  const [templateFiles, setTemplateFiles] = useState([]);
  const [warning, setWarning] = useState(false);
  const maxTemplates = 6;

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (leaseTemplates.length + selectedFiles.length > maxTemplates) {
      setWarning(true);
      const excessFiles =
        leaseTemplates.length + selectedFiles.length - maxTemplates;
      setTemplateFiles(
        selectedFiles.slice(0, selectedFiles.length - excessFiles)
      );
    } else {
      setWarning(false);
      setTemplateFiles(selectedFiles);
    }
  };

  const handleUploadTemplate = () => {
    if (leaseTemplates.length + templateFiles.length <= maxTemplates) {
      setLeaseTemplates((prev) => [...prev, ...templateFiles]);
    } else {
      setWarning(true);
      const filesToAdd = [...leaseTemplates, ...templateFiles].slice(
        -maxTemplates
      );
      setLeaseTemplates(filesToAdd);
    }
    setTemplateFiles([]);
  };

  const handleRemoveTemplate = (index) => {
    setLeaseTemplates((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <BackIcon onClick={handlePreviousStep} />
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
      <CustomSubtitle text="Please Upload Lease Agreement Template(s)" />
      <FileInputField
        onChange={handleFileChange}
        multiple
        disabled={templateFiles.length === 0}
        label="Choose files to upload"
      />
      <StyledButton
        variant="outlined"
        sx={{ mb: 2 }}
        onClick={handleUploadTemplate}
        disabled={templateFiles.length === 0}
      >
        Upload Template
      </StyledButton>
      {leaseTemplates.length > 0 && (
        <>
          <CustomSubtitle text="Uploaded Lease Agreement Templates" />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {leaseTemplates.map((template, index) => (
              <Chip
                key={index}
                label={template.name || `Template ${index + 1}`}
                variant="contained"
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
        </>
      )}
      <NextButton
        onClick={handleNextStep}
        disabled={templateFiles.length === 0 && !leaseTemplates}
      />
    </>
  );
}

export default LeaseAgreementTemplates;
