import React from "react";
import { Box, Typography, Chip } from "@mui/material";

const SampleDataDisplay = ({ data }) => {
  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
      {data.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {item.label}:
          </Typography>
          <Chip label={item.value} size="small" color="primary" />
        </Box>
      ))}
    </Box>
  );
};

export default SampleDataDisplay;
