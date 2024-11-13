import React from "react";
import { Modal, Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { pmList } from "../../constants/PmList";

const SelectPMModal = ({ open, onClose, onSelectPM }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: "white",
          p: 4,
          maxWidth: 400,
          margin: "auto",
          mt: 5,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Select a Property Manager
        </Typography>
        <List>
          {pmList.map((pm) => (
            <ListItem button key={pm.id} onClick={() => onSelectPM(pm)}>
              <ListItemText primary={pm.name} secondary={pm.email} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default SelectPMModal;
