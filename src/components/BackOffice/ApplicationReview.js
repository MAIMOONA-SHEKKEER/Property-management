import React, { useState } from "react";
import { Button, TextField, Box, Card, CardContent } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReviewChecklist from "./ReviewChecklist";
import StyledHeading from "../styled/StyledHeading";

const ApplicationReview = ({ application, onNextStep, onPrevStep }) => {
  const [isLocked, setIsLocked] = useState(application.locked);
  const [detailsChecked, setDetailsChecked] = useState(false);
  const [documentsVerified, setDocumentsVerified] = useState(false);
  const [leaseReviewed, setLeaseReviewed] = useState(false);
  const [subscriptionValidated, setSubscriptionValidated] = useState(false);
  const [blacklistChecked, setBlacklistChecked] = useState(false);

  const handleLockApplication = () => {
    setIsLocked(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <StyledHeading>Review Application Details</StyledHeading>

      <Card sx={{ width: "80%", maxWidth: 800, mb: 2 }}>
        <CardContent>
          <TextField
            label="Property ID"
            value={application.property_id}
            disabled
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            value={application.status}
            disabled
            fullWidth
            margin="normal"
          />
        </CardContent>
      </Card>

      <Button
        variant="contained"
        onClick={handleLockApplication}
        disabled={isLocked}
        sx={{ mb: 2 }}
      >
        Lock for Review
      </Button>
      <ReviewChecklist
        isLocked={isLocked}
        detailsChecked={detailsChecked}
        documentsVerified={documentsVerified}
        leaseReviewed={leaseReviewed}
        subscriptionValidated={subscriptionValidated}
        blacklistChecked={blacklistChecked}
        onCheckDetails={() => setDetailsChecked(true)}
        onVerifyDocuments={() => setDocumentsVerified(true)}
        onReviewLease={() => setLeaseReviewed(true)}
        onValidateSubscription={() => setSubscriptionValidated(true)}
        onCheckBlacklist={() => setBlacklistChecked(true)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={onNextStep}
        disabled={
          !isLocked ||
          !detailsChecked ||
          !documentsVerified ||
          !leaseReviewed ||
          !subscriptionValidated ||
          !blacklistChecked
        }
        fullWidth
        sx={{ mt: 2, maxWidth: 500 }}
      >
        Proceed to Outcome
      </Button>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={onPrevStep} 
        fullWidth
        sx={{ mt: 2, maxWidth: 500 }}
      >
        Back
      </Button>
    </Box>
  );
};

export default ApplicationReview;
