import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import BasicPropertySummary from "./BasicPropertySummary";
import { LegalTerms } from "./LegalTerms";
import { PmInvitation } from "./PmInvitation";
import { Subscription } from "./Subscription";
import PropertySetupConfiguration from "./PropertySetupConfiguration";
import LeaseTemplate from "./LeaseTemplate";
import LeaseAgreementTemplates from "./LeaseAgreementTemplate";
import DocumentUpload from "./DocumentUpload";
import ApplicationSubmission from "./ApplicationSubmission";
import ApplicationTracking from "./ApplicationTracking";
import OnboardingStepper from "./OnboardingStepper";
import StyledCard from "../styled/StyledCard";

const steps = [
  "Basic Property Summary",
  "Legal Terms",
  "Property Manager Invitation",
  "Subscription",
  "Property Setup Configuration",
  "Application to Lease Templates",
  "Property Lease Agreement Templates",
  "Upload Supporting Documents",
  "Application Submission",
];

function PropertyOnboarding() {
  const [step, setStep] = useState(1);
  const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false);
  const [skippedSteps, setSkippedSteps] = useState(new Set());
  const [completedAllSteps, setCompletedAllSteps] = useState(false);

  useEffect(() => {
    const applicationSubmitted = localStorage.getItem("applicationSubmitted");
    if (applicationSubmitted === "true") {
      setIsApplicationSubmitted(true);
    }
  }, []);

  const handleStepClick = (newStep) => {
    setStep(newStep);
  };

  const handleSkipStep = () => {
    setSkippedSteps((prevSkipped) => {
      const updatedSkipped = new Set(prevSkipped);
      updatedSkipped.add(step);
      return updatedSkipped;
    });
    handleNextStep();
  };

  const handleNextStep = () => {
    setStep((prevStep) => {
      const nextStep = prevStep + 1;
      if (nextStep === steps.length) {
        setCompletedAllSteps(true);
      }
      return nextStep;
    });
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 6, px: 3 }}>
      {isApplicationSubmitted ? (
        <ApplicationTracking />
      ) : (
        <>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Property Application Onboarding - Step {step}
          </Typography>
          <OnboardingStepper
            steps={steps}
            step={step}
            skippedSteps={skippedSteps}
            completedAllSteps={completedAllSteps}
            handleStepClick={handleStepClick}
          />
          <StyledCard>
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
                handleSkipStep={handleSkipStep}
              />
            )}
            {step === 5 && (
              <PropertySetupConfiguration
                handlePreviousStep={handlePreviousStep}
                handleNextStep={handleNextStep}
              />
            )}
            {step === 6 && (
              <LeaseTemplate
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
              <DocumentUpload
                handlePreviousStep={handlePreviousStep}
                handleNextStep={handleNextStep}
              />
            )}
            {step === 9 && (
              <ApplicationSubmission
                handlePreviousStep={handlePreviousStep}
                handleNextStep={handleNextStep}
              />
            )}
          </StyledCard>
        </>
      )}
    </Box>
  );
}

export default PropertyOnboarding;
