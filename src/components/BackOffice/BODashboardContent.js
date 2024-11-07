import React from 'react';
import { Box, Typography, Button, CardContent, Card, Grid } from '@mui/material';

function BackOfficeDashboardContent() {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">System Overview</Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Button variant="outlined">View System Stats</Button>
                <Button variant="outlined">Check Server Health</Button>
                <Button variant="outlined">View Logs</Button>
              </Box>
            </CardContent>
          </Card>
          
          {/* Recent Activities */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6">Recent Activities</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                - New User Registrations: 5
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                - System Errors: 2
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                - Latest Updates Deployed: 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* User Management */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">User Management</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                You have 3 new user registration requests.
              </Typography>
              <Button size="small" sx={{ mt: 1 }} variant="contained">
                View User Requests
              </Button>
            </CardContent>
          </Card>

          {/* Settings */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6">Settings</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Update your dashboard settings, notifications, and system preferences.
              </Typography>
              <Button size="small" sx={{ mt: 1 }} variant="outlined">
                Manage Settings
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Actions */}
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Admin Actions</Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Button variant="contained">Create New Role</Button>
                <Button variant="outlined">Manage Permissions</Button>
                <Button variant="contained" color="error">Delete User</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BackOfficeDashboardContent;
