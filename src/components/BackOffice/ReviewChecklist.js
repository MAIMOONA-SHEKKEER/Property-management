import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import StyledHeading from "../styled/StyledHeading";
import ChecklistItem from "../styled/ChecklistItem";
import SampleDataDisplay from "./SampleDataDisplay";

const ReviewChecklist = ({
  isLocked,
  onCheckDetails,
  onVerifyDocuments,
  onReviewLease,
  onValidateSubscription,
  onCheckBlacklist,
}) => {
  const [expanded, setExpanded] = useState({
    details: false,
    documents: false,
    lease: false,
    subscription: false,
    blacklist: false,
  });

  const [checked, setChecked] = useState({
    detailsChecked: false,
    documentsVerified: false,
    leaseReviewed: false,
    subscriptionValidated: false,
    blacklistChecked: false,
  });

  const handleAccordionChange = (item) => (event, isExpanded) => {
    setExpanded({ ...expanded, [item]: isExpanded });
  };

  const handleCheckChange = (item) => () => {
    setChecked({ ...checked, [item]: true });
  };

  return (
    <>
      <StyledHeading>Review Checklist</StyledHeading>
      <Card sx={{ width: "100%", maxWidth: 800 }}>
        <CardContent>
          <ChecklistItem
            label="Check Details"
            checked={checked.detailsChecked}
            onToggle={() => {
              onCheckDetails();
              handleCheckChange("detailsChecked")();
            }}
            expanded={expanded.details}
            onAccordionChange={handleAccordionChange("details")}
            summaryContent={
              <SampleDataDisplay
                data={[
                  { label: "Name", value: "John Doe" },
                  { label: "Email", value: "john.doe@example.com" },
                  { label: "ID Number", value: "123456789" },
                ]}
              />
            }
            buttonLabel="Check"
            disabled={!isLocked || checked.detailsChecked}
          />

          <ChecklistItem
            label="Verify Documents"
            checked={checked.documentsVerified}
            onToggle={() => {
              onVerifyDocuments();
              handleCheckChange("documentsVerified")();
            }}
            expanded={expanded.documents}
            onAccordionChange={handleAccordionChange("documents")}
            summaryContent={
              <SampleDataDisplay
                data={[
                  { label: "Passport", value: "Verified" },
                  { label: "Utility Bill", value: "Verified" },
                  { label: "Bank Statement", value: "Pending" },
                ]}
              />
            }
            buttonLabel="Verify"
            disabled={
              !isLocked || !checked.detailsChecked || checked.documentsVerified
            }
          />

          <ChecklistItem
            label="Review Lease Agreement"
            checked={checked.leaseReviewed}
            onToggle={() => {
              onReviewLease();
              handleCheckChange("leaseReviewed")();
            }}
            expanded={expanded.lease}
            onAccordionChange={handleAccordionChange("lease")}
            summaryContent={
              <SampleDataDisplay
                data={[
                  { label: "Start Date", value: "January 1, 2025" },
                  { label: "Rent Amount", value: "$1200/month" },
                  { label: "Security Deposit", value: "$2400" },
                ]}
              />
            }
            buttonLabel="Review"
            disabled={
              !isLocked || !checked.documentsVerified || checked.leaseReviewed
            }
          />

          <ChecklistItem
            label="Validate Subscription"
            checked={checked.subscriptionValidated}
            onToggle={() => {
              onValidateSubscription();
              handleCheckChange("subscriptionValidated")();
            }}
            expanded={expanded.subscription}
            onAccordionChange={handleAccordionChange("subscription")}
            summaryContent={
              <SampleDataDisplay
                data={[
                  { label: "Subscription Type", value: "Premium" },
                  { label: "Expiry Date", value: "December 31, 2025" },
                ]}
              />
            }
            buttonLabel="Validate"
            disabled={
              !isLocked ||
              !checked.leaseReviewed ||
              checked.subscriptionValidated
            }
          />

          <ChecklistItem
            label="Check Blacklist Status"
            checked={checked.blacklistChecked}
            onToggle={() => {
              onCheckBlacklist();
              handleCheckChange("blacklistChecked")();
            }}
            expanded={expanded.blacklist}
            onAccordionChange={handleAccordionChange("blacklist")}
            summaryContent={
              <SampleDataDisplay
                data={[
                  { label: "Credit Check", value: "Passed" },
                  { label: "Landlord References", value: "Verified" },
                ]}
              />
            }
            buttonLabel="Check"
            disabled={
              !isLocked ||
              !checked.subscriptionValidated ||
              checked.blacklistChecked
            }
          />
        </CardContent>
      </Card>
    </>
  );
};

export default ReviewChecklist;
