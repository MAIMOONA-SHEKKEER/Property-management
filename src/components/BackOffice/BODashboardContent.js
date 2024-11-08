import React from 'react';
import { Box, Typography,  CardContent, Card, Grid } from '@mui/material';
import { StyledButton } from '../styled/StyledButton';

function BackOfficeDashboardContent() {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">System Overview</Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <StyledButton variant="outlined">View System Stats</StyledButton>
                <StyledButton variant="outlined">Check Server Health</StyledButton>
                <StyledButton variant="outlined">View Logs</StyledButton>
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
              <StyledButton size="small" sx={{ mt: 1 }} variant="contained">
                View User Requests
              </StyledButton>
            </CardContent>
          </Card>

          {/* Settings */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6">Settings</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Update your dashboard settings, notifications, and system preferences.
              </Typography>
              <StyledButton size="small" sx={{ mt: 1 }} variant="outlined">
                Manage Settings
              </StyledButton>
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
                <StyledButton variant="contained">Create New Role</StyledButton>
                <StyledButton variant="outlined">Manage Permissions</StyledButton>
                <StyledButton variant="contained" color="error">Delete User</StyledButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BackOfficeDashboardContent;
