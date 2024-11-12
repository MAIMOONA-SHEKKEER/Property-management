import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledButton } from "./StyledButton";

const ChecklistItem = ({
  label,
  checked,
  onToggle,
  expanded,
  onAccordionChange,
  summaryContent,
  buttonLabel,
  disabled
}) => {
  const getIcon = (isChecked) =>
    isChecked ? <CheckCircleIcon color="success" /> : <RadioButtonUncheckedIcon color="action" />;

  return (
    <Accordion expanded={expanded} onChange={onAccordionChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          {label} {getIcon(checked)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{summaryContent}</Typography>
        <StyledButton variant="outlined" onClick={onToggle} disabled={disabled}>
          {buttonLabel}
        </StyledButton>
      </AccordionDetails>
    </Accordion>
  );
};

export default ChecklistItem;
