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
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";

import MenuIcon from "@mui/icons-material/Menu";
import {  Group, Logout } from "@mui/icons-material";
import PropertyOnboarding from "../Property/PropertyOnboarding";
import { useNavigate } from "react-router-dom";
import BackOfficeDashboardContent from "./BODashboardContent";
import ApplicationOverview from "../BackOffice/ApplicationOverview";
const drawerWidth = 240;

const BackOfficeDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navigate = useNavigate();
  
  const userEmail = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const tabs = [
    { text: "Dashboard", icon: <HomeIcon /> },
    { text: "Property Mangers Queue", icon: <Group />},
    { text: "User Management", icon: <TaskIcon /> },
    { text: "Logout", icon: <Logout />, onClick: handleLogout },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <BackOfficeDashboardContent />;
      case "Property Mangers Queue":
        return <ApplicationOverview />;
      default:
        return (
          <Typography variant="h6">Select a tab to view content</Typography>
        );
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
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
          {tabs.map(({ text, icon, onClick }) => (
            <ListItem button key={text} onClick={() => onClick ? onClick() : handleTabClick(text)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

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
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              {`${activeTab}`}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {userName && (
                <Typography variant="body1" sx={{ color: "#fff", marginRight: 2 }}>
                  {userName}
                </Typography>
              )}
              {userEmail && (
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  {userEmail}
                </Typography>
              )}
            </Box>
          </Toolbar>
        </AppBar>

        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
};

export default BackOfficeDashboard;
