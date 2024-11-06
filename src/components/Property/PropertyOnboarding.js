import React, { useState, useEffect } from "react";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";
import BasicPropertySummary from "./BasicPropertySummary";
import { LegalTerms } from "./LegalTerms";
import { PmInvitation } from "./PmInvitation";
import { Subscription } from "./Subscription";
import PropertySetupConfiguration from "./PropertySetupConfiguration";
import LeaseTemplate from "./LeaseTemplate";
import LeaseAgreementTemplates from "./LeaseAgreementTemplate";
import ApplicationSubmission from "./ApplicationSubmission";
import ApplicationTracking from "./ApplicationTracking";

const steps = [
  "Basic Property Summary",
  "Legal Terms",
  "PM Invitation",
  "Subscription",
  "Property Setup Configuration",
  "Application to Lease Templates",
  "Property Lease Agreement Templates",
  "Application Submission",
];

function PropertyOnboarding() {
  const [step, setStep] = useState(1);
  const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState({
    totalUnits: "",
    unitTypes: "",
    rentalAmount: "",
    rentalDeposit: "",
    rentalExtras: "",
    adminFee: "",
  });
  const [leaseDocumentChoice, setLeaseDocumentChoice] = useState("template");
  const [customDocument, setCustomDocument] = useState("");

  useEffect(() => {
    // Check if the application has been submitted before
    const applicationSubmitted = localStorage.getItem("applicationSubmitted");
    if (applicationSubmitted === "true") {
      setIsApplicationSubmitted(true);
    }
  }, []);

  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handlePreviousStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleLeaseDocumentChange = (e) => {
    setLeaseDocumentChoice(e.target.value);
  };

  const handleCustomDocumentChange = (e) => {
    setCustomDocument(e.target.value);
  };

  const handleDownloadTemplate = () => {
    window.open(
      "https://s3.amazonaws.com/yourbucket/document-service/get/application_to_lease_doc.pdf",
      "_blank"
    );
  };

  const handleSubmitAdditionalDetails = () => {
    console.log("Submitting additional details:", additionalDetails);
  };

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 6, px: 3 }}>
      {isApplicationSubmitted ? (
       <ApplicationTracking/>
      ) : (
        <><Typography variant="h5" align="center" sx={{ fontWeight: "bold", mb: 3 }}>
        Property Application Onboarding - Step {step}
      </Typography>
          <Stepper activeStep={step} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {step === 1 && <BasicPropertySummary handleNextStep={handleNextStep} />}
          {step === 2 && (
            <LegalTerms
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {step === 3 && (
            <PmInvitation
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {step === 4 && (
            <Subscription
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {step === 5 && (
            <PropertySetupConfiguration
              handleChange={handleChange}
              handlePreviousStep={handlePreviousStep}
              handleNextStep={handleNextStep}
              additionalDetails={additionalDetails}
              handleSubmitAdditionalDetails={handleSubmitAdditionalDetails}
            />
          )}
          {step === 6 && (
            <LeaseTemplate
              handleCustomDocumentChange={handleCustomDocumentChange}
              handleDownloadTemplate={handleDownloadTemplate}
              handleLeaseDocumentChange={handleLeaseDocumentChange}
              leaseDocumentChoice={leaseDocumentChoice}
              handlePreviousStep={handlePreviousStep}
              handleNextStep={handleNextStep}
            />
          )}
          {step === 7 && (
            <LeaseAgreementTemplates
              handlePreviousStep={handlePreviousStep}
              handleNextStep={handleNextStep}
            />
          )}
          {step === 8 && (
            <ApplicationSubmission
              handlePreviousStep={handlePreviousStep}
              handleNextStep={handleNextStep}
            />
          )}
        </>
      )}
    </Box>
  );
}

export default PropertyOnboarding;
