import React from "react";
import { Home as HomeIcon, Group, Logout } from "@mui/icons-material";
import DashboardLayout from "./DashboardLayout";
import BackOfficeDashboardContent from "../BackOffice/BODashboardContent";
import ApplicationOverview from "../BackOffice/ApplicationOverview";
import { useNavigate } from "react-router-dom";

const BackOfficeDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const tabs = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,
      content: <BackOfficeDashboardContent />,
    },
    {
      text: "Property Managers Queue",
      icon: <Group />,
      content: <ApplicationOverview />,
    },
    { text: "Logout", icon: <Logout />, onClick: () => handleLogout() },
  ];

  return (
    <DashboardLayout
      tabs={tabs}
      initialTab="Dashboard"
      userName={localStorage.getItem("userName")}
      userEmail={localStorage.getItem("userEmail")}
    />
  );
};

export default BackOfficeDashboard;
