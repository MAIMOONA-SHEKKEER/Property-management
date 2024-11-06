import React from 'react';
import { Box, Typography, Button, CardContent, Card, Grid } from '@mui/material';

function PmDashboardContent() {

  return (
    <Box sx={{ p: 3 }}>
           <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Quick Actions</Typography>
                  <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                    <Button variant="outlined">Request Money</Button>
                    <Button variant="outlined">Record Expense</Button>
                    <Button variant="outlined">Add Property</Button>
                  </Box>
                </CardContent>
              </Card>
              <Card sx={{ mt: 2 }}>
                <CardContent>
                  <Typography variant="h6">Items To Complete</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    - Set up Address
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    - Start Collecting Rent
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    - Link an Account
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Unread Messages</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    You have no unread tenant messages!
                  </Typography>
                  <Button size="small" sx={{ mt: 1 }}>
                    View Tenants
                  </Button>
                </CardContent>
              </Card>
              <Card sx={{ mt: 2 }}>
                <CardContent>
                  <Typography variant="h6">Maintenance Requests</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    You have no open maintenance requests!
                  </Typography>
                  <Button size="small" sx={{ mt: 1 }}>
                    View Maintenance & Repairs
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
    </Box>
  );
}

export default PmDashboardContent;
