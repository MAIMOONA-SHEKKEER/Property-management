import React from "react";
import {
  Home as HomeIcon,
  Task as TaskIcon,
  Group,
  Logout,
} from "@mui/icons-material";
import DashboardLayout from "./DashboardLayout";
import PmDashboardContent from "../Property/PmDashboardContent";
import PropertyOnboarding from "../Property/PropertyOnboarding";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";
import { QueueMusicRounded, Propane } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PmDashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const tabs = [
    { text: "Dashboard", icon: <HomeIcon />, content: <PmDashboardContent userName={userName} /> },
    { text: "Tasks", icon: <TaskIcon /> },
    {
      text: "Properties",
      icon: <Group />,
      content: <PropertyOnboarding />,
    },
    { text: "Services", icon: <MessageIcon /> },
    {
      text: "Marketing",
      icon: <QueueMusicRounded />,
    },
    { text: "Tenants & Leases", icon: <Group /> },
    { text: "Financials", icon: <Propane /> },
    {
      text: "Maintenance & Repair",
      icon: <TaskIcon />,
    },
    { text: "Reports", icon: <SettingsIcon /> },
    {
      text: "Logout",
      icon: <Logout />,
      onClick: () => handleLogout(),
    },
  ];
  return (
    <DashboardLayout
      tabs={tabs}
      initialTab="Dashboard"
      userName={userName}
      userEmail={userEmail}
    />
  );
};

export default PmDashboard;
