import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";
import MenuIcon from "@mui/icons-material/Menu";
import { QueueMusicRounded, Propane, Group } from "@mui/icons-material";
import PropertyOnboarding from "../Property/PropertyOnboarding";

const drawerWidth = 240;

const PmDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Sidebar tabs and icons
  const tabs = [
    { text: "Dashboard", icon: <HomeIcon style={{ color: "#FFFFFF" }} /> },
    { text: "Tasks", icon: <TaskIcon style={{ color: "#FFFFFF" }} /> },
    { text: "Properties", icon: <ApartmentIcon style={{ color: "#FFFFFF" }} /> },
    { text: "Services", icon: <MessageIcon style={{ color: "#FFFFFF" }} /> },
    { text: "Marketing", icon: <QueueMusicRounded style={{ color: "#FFFFFF" }} /> },
    { text: "Tenants & Leases", icon: <Group style={{ color: "#FFFFFF" }} /> },
    { text: "Financials", icon: <Propane style={{ color: "#FFFFFF" }} /> },
    { text: "Maintenance & Repair", icon: <TaskIcon style={{ color: "#FFFFFF" }} /> },
    { text: "Reports", icon: <SettingsIcon style={{ color: "#FFFFFF" }} /> },
  ];

  // Different sections for each tab
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
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
        );

      case "Properties":
        return (
        <PropertyOnboarding/>
        );


      default:
        return <Typography variant="h6">Select a tab to view content</Typography>;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1A237E",
            color: "#FFFFFF",
          },
        }}
      >
        <Toolbar />
        <List>
          {tabs.map(({ text, icon }) => (
            <ListItem button key={text} onClick={() => handleTabClick(text)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#F4F6F8", p: 3 }}>
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            bgcolor: "#283593",
          }}
        >
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {`Good Afternoon, Property Manager! - ${activeTab}`}
            </Typography>
          </Toolbar>
        </AppBar>

        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
};

export default PmDashboard;
