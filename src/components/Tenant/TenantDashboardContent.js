import React from "react";
import { Typography, Box, Card, CardContent, Grid, Avatar, Button, Divider } from "@mui/material";
import { AccountCircle, Notifications, Home } from "@mui/icons-material";
import StyledHeading from "../styled/StyledHeading";

const TenantDashboardContent = ({userName,userEmail}) => (
  <Box p={2}>
    <StyledHeading>
      Welcome {userName}
    </StyledHeading>
    <Typography variant="body1" color="text.secondary" mb={3}>
      Here you can view your properties, manage your profile, and stay updated.
    </Typography>

    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                <Home />
              </Avatar>
              <Typography variant="h6">My Properties</Typography>
            </Box>
            <Divider />
            <Box mt={2}>
              <Typography variant="body1">Property 1: Ocean View Apartment</Typography>
              <Typography variant="body2" color="text.secondary">Status: Rented</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body1">Property 2: City Center Condo</Typography>
              <Typography variant="body2" color="text.secondary">Status: Available</Typography>
            </Box>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
              View All Properties
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar sx={{ bgcolor: "secondary.main", mr: 2 }}>
                <AccountCircle />
              </Avatar>
              <Typography variant="h6">Account Settings</Typography>
            </Box>
            <Divider />
            <Box mt={2}>
              <Typography variant="body1">Profile Information</Typography>
              <Typography variant="body2" color="text.secondary">Edit your contact details and address.</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body1">Security Settings</Typography>
              <Typography variant="body2" color="text.secondary">Update your password and enable 2FA.</Typography>
            </Box>
            <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
              Manage Account
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar sx={{ bgcolor: "success.main", mr: 2 }}>
                <Notifications />
              </Avatar>
              <Typography variant="h6">Notifications</Typography>
            </Box>
            <Divider />
            <Box mt={2}>
              <Typography variant="body1">New message from landlord</Typography>
              <Typography variant="body2" color="text.secondary">Received: 2 hours ago</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body1">Reminder: Rent due in 3 days</Typography>
              <Typography variant="body2" color="text.secondary">Received: 1 day ago</Typography>
            </Box>
            <Button variant="outlined" color="success" sx={{ mt: 2 }}>
              View All Notifications
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default TenantDashboardContent;
