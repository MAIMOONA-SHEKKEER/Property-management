import React from 'react';
import { Box, Typography, Checkbox, Button, FormControlLabel } from '@mui/material';

function TermsAndConditions() {
  const [accepted, setAccepted] = React.useState(false);

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Terms and Conditions</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Please read and accept the terms and conditions to proceed.
      </Typography>
      <FormControlLabel
        control={
          <Checkbox checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
        }
        label="I accept the terms and conditions"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        disabled={!accepted}
        sx={{ mt: 2 }}
      >
        Accept and Continue
      </Button>
    </Box>
  );
}

export default TermsAndConditions;
