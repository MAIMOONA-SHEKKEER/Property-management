import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import {
  Download as DownloadIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import { StyledButton } from "../styled/StyledButton";
import StyledCard from "../styled/StyledCard";
import InputField from "../styled/InputField";
import StyledTypography from "../styled/StyledTypography";

const LeaseTemplate = ({ handlePreviousStep, handleNextStep }) => {
  const [leaseDocumentChoice, setLeaseDocumentChoice] = useState("template");
  const [customDocument, setCustomDocument] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleLeaseDocumentChange = (e) => {
    setLeaseDocumentChoice(e.target.value);
    setIsSaved(false);
  };

  const handleCustomDocumentChange = (e) => {
    setCustomDocument(e.target.files[0]);
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
  };

  const handleSave = () => {
    setIsSaved(true);
  };

  return (
    <>
      <StyledCard>
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
          <Box sx={{ mb: 3 }}>
            <StyledButton
              variant="contained"
              sx={{ backgroundColor: "#3f51b5", color: "white" }}
              startIcon={<DownloadIcon />}
              onClick={handleDownloadTemplate}
            >
              Download Template
            </StyledButton>
          </Box>
        )}

        {leaseDocumentChoice === "custom" && (
          <InputField
            label="Upload Custom Document"
            fullWidth
            type="file"
            onChange={handleCustomDocumentChange}
          />
        )}
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
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

        <StyledButton
          variant="contained"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
          startIcon={<SaveIcon />}
          onClick={handleSave}
          disabled={
            !leaseDocumentChoice ||
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
          Back to Property Setup Configuration
        </StyledButton>
      </StyledCard>
    </>
  );
};

export default LeaseTemplate;
