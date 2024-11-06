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
import ApartmentIcon from "@mui/icons-material/Apartment";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";
import MenuIcon from "@mui/icons-material/Menu";
import { QueueMusicRounded, Propane, Group, Logout } from "@mui/icons-material";
import PropertyOnboarding from "../Property/PropertyOnboarding";
import { useNavigate } from "react-router-dom";
import PmDashboardContent from "./PmDashboardContent";
const drawerWidth = 240;

const PmDashboard = () => {
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
    { text: "Dashboard", icon: <HomeIcon style={{ color: "#FFFFFF" }} /> },
    { text: "Tasks", icon: <TaskIcon style={{ color: "#FFFFFF" }} /> },
    {
      text: "Properties",
      icon: <ApartmentIcon style={{ color: "#FFFFFF" }} />,
    },
    { text: "Services", icon: <MessageIcon style={{ color: "#FFFFFF" }} /> },
    {
      text: "Marketing",
      icon: <QueueMusicRounded style={{ color: "#FFFFFF" }} /> ,
    },
    { text: "Tenants & Leases", icon: <Group style={{ color: "#FFFFFF" }} /> },
    { text: "Financials", icon: <Propane style={{ color: "#FFFFFF" }} /> },
    {
      text: "Maintenance & Repair",
      icon: <TaskIcon style={{ color: "#FFFFFF" }} />,
    },
    { text: "Reports", icon: <SettingsIcon style={{ color: "#FFFFFF" }} /> },
    {
      text: "Logout",
      icon: <Logout style={{ color: "#FFFFFF" }} />,
      onClick: handleLogout,
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <PmDashboardContent />;
      case "Properties":
        return <PropertyOnboarding />;
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

export default PmDashboard;
