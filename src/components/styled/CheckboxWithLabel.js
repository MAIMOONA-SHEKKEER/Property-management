import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

const CheckboxWithLabel = ({ label, isChecked, onChange, required = false, ...props }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={isChecked}
        onChange={onChange}
        {...props}
      />
    }
    label={
      <Typography component="span">
        {label}
        {required && <span style={{ color: 'red' }}> *</span>}
      </Typography>
    }
    sx={{ mt: 2 }}
  />
);

export default CheckboxWithLabel;
