import React from 'react';
import { Box, Typography, Button, CardContent, Card, Grid, Avatar, Divider } from '@mui/material';
import { Money, Add, Inbox, Build, Checklist, Home } from '@mui/icons-material';
import StyledHeading from '../styled/StyledHeading';

function PmDashboardContent({userName}) {
  return (
    <Box sx={{ p: 2, bgcolor: "#f5f5f5" }}>
      <StyledHeading>
      Welcome {userName}
    </StyledHeading>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                  <Checklist />
                </Avatar>
                <Typography variant="h6">Quick Actions</Typography>
              </Box>
              <Divider />
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Button variant="contained" color="primary" startIcon={<Money />}>
                  Request Money
                </Button>
                <Button variant="contained" color="secondary" startIcon={<Add />}>
                  Record Expense
                </Button>
                <Button variant="contained" color="success" startIcon={<Add />}>
                  Add Property
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: "info.main", mr: 2 }}>
                  <Checklist />
                </Avatar>
                <Typography variant="h6">Items to Complete</Typography>
              </Box>
              <Divider />
              <Box mt={2}>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  - Set up Address
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  - Start Collecting Rent
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  - Link an Account
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: "secondary.main", mr: 2 }}>
                  <Inbox />
                </Avatar>
                <Typography variant="h6">Unread Messages</Typography>
              </Box>
              <Divider />
              <Box mt={2}>
                <Typography variant="body2" color="text.secondary">
                  You have no unread tenant messages!
                </Typography>
                <Button size="small" color="primary" sx={{ mt: 2 }}>
                  View Tenants
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: "error.main", mr: 2 }}>
                  <Build />
                </Avatar>
                <Typography variant="h6">Maintenance Requests</Typography>
              </Box>
              <Divider />
              <Box mt={2}>
                <Typography variant="body2" color="text.secondary">
                  You have no open maintenance requests!
                </Typography>
                <Button size="small" color="secondary" sx={{ mt: 2 }}>
                  View Maintenance & Repairs
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

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
      </Grid>
    </Box>
  );
}

export default PmDashboardContent;
