import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

const ApplicationReview = ({ application, onNextStep }) => {
  const [isLocked, setIsLocked] = useState(application.locked);

  const handleLockApplication = () => {
    setIsLocked(true); // Simulate lock by updating local state
  };

  return (
    <div>
      <Typography variant="h5">Review Application Details</Typography>
      <TextField label="Property ID" value={application.property_id} disabled />
      <TextField label="Status" value={application.status} disabled />
      <Button onClick={handleLockApplication} disabled={isLocked}>
        Lock for Review
      </Button>
      <Button onClick={onNextStep} disabled={!isLocked}>Proceed to Outcome</Button>
    </div>
  );
};

export default ApplicationReview;
