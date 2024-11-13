import React from "react";
import { Stepper, Step, StepLabel, Tooltip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CircleTwoTone, Error } from "@mui/icons-material";
import theme from "../../styles/globalStyles";

const OnboardingStepper = ({
  steps,
  step,
  skippedSteps,
  completedAllSteps,
  handleStepClick,
}) => {
  const StepIconComponent = ({ icon, active, completed, index }) => {
    const isSkipped = skippedSteps.has(index + 1);

    if (completed && !isSkipped) {
      return <CheckCircleIcon color="success" />;
    }
    if (isSkipped) {
      return <Error sx={{ color: theme.palette.error.main }} />;
    }
    if (active) {
      return <CircleTwoTone sx={{ color: theme.palette.primary.main }} />;
    }
    return <CircleTwoTone color="disabled" />;
  };

  return (
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
                    index === step - 1 ? theme.palette.primary.main : "inherit",
                },
              }}
              onClick={() => {
                if (completedAllSteps) {
                  handleStepClick(index + 1);
                }
              }}
            >
              {label}
            </StepLabel>
          </Tooltip>
        </Step>
      ))}
    </Stepper>
  );
};

export default OnboardingStepper;
