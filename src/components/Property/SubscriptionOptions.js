import React, { useState } from "react";
import {
  Modal,
  Typography,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import StyledCard from "../styled/StyledCard";

const SubscriptionOptionsModal = ({
  isOpen,
  onClose,
  onActivateSubscription,
}) => {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleActivate = () => {
    if (selectedPlan) {
      onActivateSubscription(selectedPlan);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <StyledCard>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Subscription Options
        </Typography>

        <RadioGroup value={selectedPlan} onChange={handlePlanChange}>
          <List>
            <ListItem>
              <FormControlLabel
                value="Basic"
                control={<Radio />}
                label={
                  <ListItemText
                    primary="Basic Plan"
                    secondary="$10/month - Basic management features"
                  />
                }
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                value="Premium"
                control={<Radio />}
                label={
                  <ListItemText
                    primary="Premium Plan"
                    secondary="$20/month - Additional analytics and reporting"
                  />
                }
              />
            </ListItem>
            <ListItem>
              <FormControlLabel
                value="Enterprise"
                control={<Radio />}
                label={
                  <ListItemText
                    primary="Enterprise Plan"
                    secondary="$50/month - All features with priority support"
                  />
                }
              />
            </ListItem>
          </List>
        </RadioGroup>

        <StyledButton
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleActivate}
          disabled={!selectedPlan}
        >
          Activate Selected Plan
        </StyledButton>

        <StyledButton
          variant="outlined"
          fullWidth
          sx={{ mt: 1 }}
          onClick={onClose}
        >
          Close
        </StyledButton>
      </StyledCard>
    </Modal>
  );
};

export default SubscriptionOptionsModal;
