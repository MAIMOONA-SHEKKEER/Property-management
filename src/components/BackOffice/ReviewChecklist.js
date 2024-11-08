import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import StyledHeading from "../styled/StyledHeading";
import { StyledButton } from "../styled/StyledButton";

const ReviewChecklist = ({
  isLocked,
  detailsChecked,
  documentsVerified,
  leaseReviewed,
  subscriptionValidated,
  blacklistChecked,
  onCheckDetails,
  onVerifyDocuments,
  onReviewLease,
  onValidateSubscription,
  onCheckBlacklist,
}) => {
  const getIcon = (isChecked) =>
    isChecked ? (
      <CheckCircleIcon color="success" />
    ) : (
      <RadioButtonUncheckedIcon color="action" />
    );

  return (
    <>
      <StyledHeading>Review Checklist</StyledHeading>
      <Card sx={{ width: "100%", maxWidth: 800 }}>
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>{getIcon(detailsChecked)}</ListItemIcon>
              <ListItemText primary="Check Details" />
              <StyledButton
                variant="outlined"
                onClick={onCheckDetails}
                disabled={!isLocked || detailsChecked}
              >
                Check
              </StyledButton>
            </ListItem>

            <ListItem>
              <ListItemIcon>{getIcon(documentsVerified)}</ListItemIcon>
              <ListItemText primary="Verify Documents" />
              <StyledButton
                variant="outlined"
                onClick={onVerifyDocuments}
                disabled={!isLocked || !detailsChecked || documentsVerified}
              >
                Verify
              </StyledButton>
            </ListItem>

            <ListItem>
              <ListItemIcon>{getIcon(leaseReviewed)}</ListItemIcon>
              <ListItemText primary="Review Lease Agreement" />
              <StyledButton
                variant="outlined"
                onClick={onReviewLease}
                disabled={!isLocked || !documentsVerified || leaseReviewed}
              >
                Review
              </StyledButton>
            </ListItem>

            <ListItem>
              <ListItemIcon>{getIcon(subscriptionValidated)}</ListItemIcon>
              <ListItemText primary="Validate Subscription" />
              <StyledButton
                variant="outlined"
                onClick={onValidateSubscription}
                disabled={!isLocked || !leaseReviewed || subscriptionValidated}
              >
                Validate
              </StyledButton>
            </ListItem>

            <ListItem>
              <ListItemIcon>{getIcon(blacklistChecked)}</ListItemIcon>
              <ListItemText primary="Check Blacklist Status" />
              <StyledButton
                variant="outlined"
                onClick={onCheckBlacklist}
                disabled={
                  !isLocked || !subscriptionValidated || blacklistChecked
                }
              >
                Check
              </StyledButton>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default ReviewChecklist;
