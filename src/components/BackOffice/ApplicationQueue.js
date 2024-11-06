import React, { useState, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import AppTable from "../styled/AppTable"; // Assuming AppTable is a styled component
import FilterDropdown from "../styled/FilterDropdown"; // Assuming FilterDropdown is a styled component
import { applications as allApplications } from "../../constants/application"; // Assuming applications data is imported

const ApplicationQueue = ({ onSelectApplication }) => {
  const [propertyId, setPropertyId] = useState("");
  const [filteredApplications, setFilteredApplications] = useState([]);

  const applicationColumns = [
    { id: "id", label: "ID" },
    { id: "property_id", label: "Property Id" },
    { id: "status", label: "Status" },
    { id: "action", label: "Action" },
  ];

  const applications = useMemo(() => {
    return allApplications || []; 
  }, [allApplications]);

  const handleSearch = () => {
    const filtered = applications.filter(
      (app) => app.property_id === propertyId
    );
    setFilteredApplications(filtered.length ? filtered : applications);
  };

  const searchOptions = useMemo(() => {
    return [...new Set(applications.map((app) => app.property_id.toString()))];
  }, [applications]);

  const handleView = (application) => {
    onSelectApplication(application);
  };

  return (
    <Box sx={{ p: 2, marginLeft: 30 }}>
      <Typography
            variant="h6"
            sx={{ fontWeight: "medium", color: "#3f51b5", mb: 2 }}
          >
            Property Application Queue
          </Typography>

      <FilterDropdown
        options={searchOptions}
        label="Search by Property ID"
        value={propertyId}
        onChange={(event, newValue) => setPropertyId(newValue || "")}
      />

      <AppTable
        columns={applicationColumns}
        data={filteredApplications.length > 0 ? filteredApplications : applications} 
        onView={handleView}
        loading={false}
      />
    </Box>
  );
};

export default ApplicationQueue;
