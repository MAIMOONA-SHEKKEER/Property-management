import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import StyledHeading from "../styled/StyledHeading";

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
              <Button
                variant="outlined"
                onClick={onCheckDetails}
                disabled={!isLocked || detailsChecked}
              >
                Check
              </Button>
            </ListItem>

            <ListItem>
              <ListItemIcon>{getIcon(documentsVerified)}</ListItemIcon>
              <ListItemText primary="Verify Documents" />
              <Button
                variant="outlined"
                onClick={onVerifyDocuments}
                disabled={!isLocked || !detailsChecked || documentsVerified}
              >
                Verify
              </Button>
            </ListItem>

            <ListItem>
              <ListItemIcon>{getIcon(leaseReviewed)}</ListItemIcon>
              <ListItemText primary="Review Lease Agreement" />
              <Button
                variant="outlined"
                onClick={onReviewLease}
                disabled={!isLocked || !documentsVerified || leaseReviewed}
              >
                Review
              </Button>
            </ListItem>

            <ListItem>
              <ListItemIcon>{getIcon(subscriptionValidated)}</ListItemIcon>
              <ListItemText primary="Validate Subscription" />
              <Button
                variant="outlined"
                onClick={onValidateSubscription}
                disabled={!isLocked || !leaseReviewed || subscriptionValidated}
              >
                Validate
              </Button>
            </ListItem>

            <ListItem>
              <ListItemIcon>{getIcon(blacklistChecked)}</ListItemIcon>
              <ListItemText primary="Check Blacklist Status" />
              <Button
                variant="outlined"
                onClick={onCheckBlacklist}
                disabled={
                  !isLocked || !subscriptionValidated || blacklistChecked
                }
              >
                Check
              </Button>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default ReviewChecklist;
