import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Tooltip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CircleTwoTone } from "@mui/icons-material";
import BasicPropertySummary from "./BasicPropertySummary";
import { LegalTerms } from "./LegalTerms";
import { PmInvitation } from "./PmInvitation";
import { Subscription } from "./Subscription";
import PropertySetupConfiguration from "./PropertySetupConfiguration";
import LeaseTemplate from "./LeaseTemplate";
import LeaseAgreementTemplates from "./LeaseAgreementTemplate";
import ApplicationSubmission from "./ApplicationSubmission";
import ApplicationTracking from "./ApplicationTracking";
import theme from "../../styles/globalStyles";
import { ErrorRounded } from "@mui/icons-material";
import DocumentUpload from "./DocumentUpload";

const steps = [
  "Basic Property Summary",
  "Legal Terms",
  "PM Invitation",
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

  const StepIconComponent = ({ icon, active, completed, index }) => {
    const isSkipped = skippedSteps.has(index + 1);

    if (completed && !isSkipped) {
      return <CheckCircleIcon color="success" />;
    }
    if (isSkipped) {
      return <ErrorRounded color="error" />;
    }

    if (active) {
      return <CircleTwoTone sx={{ color: theme.palette.primary.main }} />;
    }

    return <CircleTwoTone color="disabled" />;
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
          <Stepper activeStep={step - 1} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index} completed={index < step - 1}>
                <Tooltip
                  title={completedAllSteps ? label : ""}
                  placement="top"
                  arrow
                  disableHoverListener={!completedAllSteps}
                >
                  <StepLabel
                    StepIconComponent={(props) => (
                      <StepIconComponent
                        {...props}
                        index={index}
                        active={index === step - 1}
                      />
                    )}
                    sx={{
                      "& .MuiStepLabel-label": {
                        color:
                          index === step - 1
                            ? theme.palette.primary.main
                            : "inherit",
                      },
                    }}
                    onClick={() => {
                      if (completedAllSteps) {
                        setStep(index + 1);
                      }
                    }}
                  >
                    {label}
                  </StepLabel>
                </Tooltip>
              </Step>
            ))}
          </Stepper>

          {step === 1 && (
            <BasicPropertySummary handleNextStep={handleNextStep} />
          )}
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
        </>
      )}
    </Box>
  );
}

export default PropertyOnboarding;
