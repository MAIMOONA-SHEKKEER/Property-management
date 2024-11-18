import React from 'react';
import { Box, IconButton, Typography } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import theme from "../../styles/globalStyles";

const AddRemoveConfiguration = ({ onAdd, onRemove, canRemove,isAddButtonDisabled }) => (
  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
    <IconButton
      color="error"
      onClick={onRemove}
      disabled={!canRemove}
      sx={{ mr: 2 }}
    >
      <RemoveCircle />
    </IconButton>

    <Typography variant="body2" color="textSecondary" sx={{ mr: 2 }}>
      Would you like to add more configurations?
    </Typography>

    <IconButton
      sx={{ color: theme.palette.primary.main }}
      onClick={onAdd}
      disabled={isAddButtonDisabled}
    >
      <AddCircle />
    </IconButton>
  </Box>
);

export default AddRemoveConfiguration;
