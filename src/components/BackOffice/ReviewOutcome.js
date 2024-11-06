import React from 'react';
import { Button, Typography } from '@mui/material';

const ReviewOutcome = ({ application }) => {
  const handleApprove = () => {
    alert(`Application ${application.id} Approved`);
  };

  const handleConditionallyApprove = () => {
    const comments = prompt("Enter comments for conditional approval:");
    if (!comments) return;
    alert(`Application ${application.id} Conditionally Approved with comments: ${comments}`);
  };

  const handleDecline = () => {
    alert(`Application ${application.id} Declined`);
  };

  return (
    <div>
      <Typography variant="h5">Application Outcome</Typography>
      <Button onClick={handleApprove}>Approve</Button>
      <Button onClick={handleConditionallyApprove}>Conditionally Approve</Button>
      <Button onClick={handleDecline}>Decline</Button>
    </div>
  );
};

export default ReviewOutcome;
