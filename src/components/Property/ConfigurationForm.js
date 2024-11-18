import React from 'react';
import { Grid, Typography } from "@mui/material";
import InputField from "../styled/InputField";
import theme from "../../styles/globalStyles";

const ConfigurationForm = ({ config, index, errors, onChange }) => (
  <div key={index} style={{ marginBottom: "1.5rem" }}>
    <Typography variant="subtitle1" sx={{ mb: 1, color: theme.palette.primary.main }}>
      Configuration {index + 1}
    </Typography>
    <Grid container spacing={2}>
      {['totalUnits', 'unitTypes', 'rentalAmount', 'rentalDeposit', 'rentalExtras', 'adminFee'].map((field, idx) => (
        <Grid item xs={12} sm={6} key={idx}>
          <InputField
            label={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            name={field}
            value={config[field]}
            onChange={(e) => onChange(index, e)}
            error={!!errors[index]?.[field]}
            helperText={errors[index]?.[field]}
          />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default ConfigurationForm;
