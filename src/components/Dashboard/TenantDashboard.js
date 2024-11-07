import React from "react";
import {
  Home as HomeIcon,
  Task as TaskIcon,
  Group,
  Apartment,
  Person,
  Logout,Message
} from "@mui/icons-material";
import DashboardLayout from "./DashboardLayout";
import TenantDashboardContent from "../Tenant/TenantDashboardContent";
import TenantProfile from "../Tenant/TenantProfile";
import TenantProperties from "../Tenant/TenantProperties";
import { useNavigate } from "react-router-dom";

const TenantDashboard = () => {
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
      content: (
        <TenantDashboardContent userName={userName} userEmail={userEmail} />
      ),
    },
    {
      text: "My Properties",
      icon: <Apartment />,
      content: <TenantProperties />,
    },
    { text: "Profile", icon: <Person />, content: <TenantProfile /> },
    {
      text: "Maintenance & Repair",
      icon: <TaskIcon />,
    },
    {
      text: "Messages",
      icon: <Message />,
    },
    { text: "Leases", icon: <Group /> },

    { text: "Logout", icon: <Logout />, onClick: () => handleLogout() },
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

export default TenantDashboard;
