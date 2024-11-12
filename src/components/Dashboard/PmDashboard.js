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
    {
      text: "Dashboard",
      icon: <HomeIcon />,
      onClick: () => navigate("/pm-dashboard"),
      content: <PmDashboardContent userName={userName} />,
    },
    { text: "Tasks", icon: <TaskIcon />, path: "/pm-dashboard/tasks" },
    {
      text: "Properties",
      icon: <Group />,
      onClick: () => navigate("/pm-dashboard/properties"),
      content: <PropertyOnboarding />,
    },
    { text: "Services", icon: <MessageIcon />, path: "/pm-dashboard/services" },
    {
      text: "Marketing",
      icon: <QueueMusicRounded />,
      path: "/pm-dashboard/marketing",
    },
    {
      text: "Tenants & Leases",
      icon: <Group />,
      path: "/pm-dashboard/tenants-leases",
    },
    { text: "Financials", icon: <Propane />, path: "/pm-dashboard/financials" },
    {
      text: "Maintenance & Repair",
      icon: <TaskIcon />,
      path: "/pm-dashboard/maintenance-repair",
    },
    { text: "Reports", icon: <SettingsIcon />, path: "/pm-dashboard/reports" },
    {
      text: "Logout",
      icon: <Logout />,
      onClick: () => handleLogout(),
      path: "/pm-dashboard/logout",
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
