import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import { StyledButton } from "../styled/StyledButton";
import StyledTypography from "../styled/StyledTypography";
import FileInputField from "../styled/FileInputField";
import BackIcon from "../styled/BackIcon";
import SaveButton from "../styled/SaveButton";
import NextButton from "../styled/NextButton";
import CustomSubtitle from "../styled/CustomSubtitle";

const LeaseTemplate = ({ handlePreviousStep, handleNextStep }) => {
  const [leaseDocumentChoice, setLeaseDocumentChoice] = useState("template");
  const [customDocument, setCustomDocument] = useState(null);
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
  const handleDownloadTemplate = () => {
    window.open(
      "http://document-service/get/application_to_lease_doc.pdf",
      "_blank"
    );
    setHasDownloadedTemplate(true);
  };

  const handleSave = () => {
    if (leaseDocumentChoice === "template" || customDocument) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  };

  return (
    <>
      <BackIcon onClick={handlePreviousStep} />
      <StyledTypography>
        Step 6: Application to Lease Templates
      </StyledTypography>
      <Divider sx={{ mb: 2 }} />
      <CustomSubtitle
        text="Select an option below to proceed with the application to lease
        template:"
      />
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
            Download Our Template
          </StyledButton>

          {hasDownloadedTemplate && (
            <>
              <CustomSubtitle
                text="Please Upload Edited Template here"
                mt={3}
              />
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
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <SaveButton
          onClick={handleSave}
          sx={{ flex: 1, mr: 1 }}
          disabled={
            !leaseDocumentChoice ||
            (leaseDocumentChoice === "custom" && !customDocument)
          }
        />
        <NextButton
          onClick={handleNextStep}
          sx={{ flex: 1, ml: 1 }}
          disabled={!isSaved}
        />
      </Box>
    </>
  );
};

export default LeaseTemplate;
