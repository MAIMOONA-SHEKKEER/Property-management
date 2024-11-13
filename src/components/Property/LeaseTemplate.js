import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Download as DownloadIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import { StyledButton } from "../styled/StyledButton";
import InputField from "../styled/InputField";
import StyledTypography from "../styled/StyledTypography";
import FileInputField from "../styled/FileInputField";

const LeaseTemplate = ({ handlePreviousStep, handleNextStep }) => {
  const [leaseDocumentChoice, setLeaseDocumentChoice] = useState("template");
  const [customDocument, setCustomDocument] = useState(null); // Custom document
  const [emailBody, setEmailBody] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [hasDownloadedTemplate, setHasDownloadedTemplate] = useState(false);

  const handleLeaseDocumentChange = (e) => {
    setLeaseDocumentChoice(e.target.value);
    setIsSaved(false);
    setHasDownloadedTemplate(false);
  };

  const handleCustomDocumentChange = (e) => {
    const file = e.target.files[0];
    setCustomDocument(file);
    setIsSaved(false);
  };

  const handleEmailBodyChange = (e) => {
    setEmailBody(e.target.value);
  };

  const handleDownloadTemplate = () => {
    window.open(
      "http://document-service/get/application_to_lease_doc.pdf",
      "_blank"
    );
    setHasDownloadedTemplate(true);
  };

  const handleSave = () => {
    if (emailBody && (leaseDocumentChoice === "template" || customDocument)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  };

  return (
    <>
      <StyledTypography>
        Step 6: Application to Lease Templates
      </StyledTypography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        Select an option below to proceed with the application to lease
        template:
      </Typography>
      <RadioGroup
        value={leaseDocumentChoice}
        onChange={handleLeaseDocumentChange}
        sx={{ mb: 3 }}
      >
        <FormControlLabel
          value="template"
          control={<Radio />}
          label="Use Our Existing Template"
        />
        <FormControlLabel
          value="custom"
          control={<Radio />}
          label="Upload Custom Document"
        />
      </RadioGroup>
      {leaseDocumentChoice === "template" && (
        <Box sx={{ mb: 2 }}>
          <StyledButton
            variant="contained"
            sx={{ mb: 2 }}
            startIcon={<DownloadIcon />}
            onClick={handleDownloadTemplate}
          >
            Download Template
          </StyledButton>

          {hasDownloadedTemplate && (
            <>
              <Typography variant="body2" color="textSecondary" mt={3}>
                Please Upload Edited Template here
              </Typography>
              <FileInputField
                label="Upload Edited Template"
                fullWidth
                onChange={handleCustomDocumentChange}
              />
            </>
          )}
        </Box>
      )}
      {leaseDocumentChoice === "custom" && (
        <FileInputField
          label="Upload Custom Document"
          fullWidth
          onChange={handleCustomDocumentChange}
        />
      )}
      <Tooltip title="Enter the content for the email body here">
        <Typography variant="body1" sx={{ color: "#3f51b5", mt: 1 }}>
          Enter the email body to be sent with the application to lease document
        </Typography>
        <InputField
          label="Email Body"
          type="textarea"
          fullWidth
          multiline
          minRows={4}
          value={emailBody}
          onChange={handleEmailBodyChange}
          placeholder="  Enter email body content"
        />
      </Tooltip>
      <StyledButton
        variant="contained"
        fullWidth
        sx={{ mt: 2, mb: 2 }}
        startIcon={<SaveIcon />}
        onClick={handleSave}
        disabled={
          !leaseDocumentChoice ||
          !emailBody ||
          (leaseDocumentChoice === "custom" && !customDocument)
        }
      >
        Save
      </StyledButton>
      <StyledButton
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleNextStep}
        disabled={!isSaved}
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
    </>
  );
};

export default LeaseTemplate;
