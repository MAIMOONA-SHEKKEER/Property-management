import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Card,
} from "@mui/material";
import theme from "../../styles/globalStyles";

const ApplicationStatusSection = ({
  status,
  applications,
  onSelectApplication,
  isLoading,
}) => {
  return (
    <Box>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100px"
        >
          <CircularProgress size={24} />
        </Box>
      ) : applications.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No {status.toLowerCase()} applications found
        </Typography>
      ) : (
        <Card
          sx={{
            p: 2,
            m: 1,
            width: 400,
            minHeight: 500,
          }}
        >
          <Typography variant="h6" sx={{color:theme.palette.primary.main}} gutterBottom>
            {status} Applications
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {applications.length} {status.toLowerCase()} applications found
          </Typography>
          <List>
            {applications.map((application) => (
              <ListItem
                key={application.id}
                button
                onClick={() => onSelectApplication(application)}
              >
                <ListItemText
                  primary={`Property ID: ${application.property_id}`}
                  secondary={`Application ID: ${application.id}`}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
            ))}
          </List>
        </Card>
      )}
    </Box>
  );
};

export default ApplicationStatusSection;
