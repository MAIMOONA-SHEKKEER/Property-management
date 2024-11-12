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
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const DashboardLayout = ({ tabs, initialTab, userName, userEmail }) => {
  const [activeTab, setActiveTab] = useState(initialTab || "Dashboard");

  const handleTabClick = (tab, onClick) => {
    setActiveTab(tab);
    if (onClick) onClick();
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
            <ListItem
              button
              key={text}
              onClick={() => handleTabClick(text, onClick)}
            >
              <ListItemIcon sx={{ color: "#FFFFFF" }}>{icon}</ListItemIcon>
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
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {`${activeTab}`}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {userName && (
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", marginRight: 2 }}
                >
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
        <Box sx={{ p: 3 }}>
          {tabs.find((tab) => tab.text === activeTab)?.content || (
            <Typography variant="h6">Select a tab to view content</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
