import React, { useState, useMemo, useEffect } from "react";
import { Box } from "@mui/material";
import AppTable from "../styled/AppTable";
import FilterDropdown from "../styled/FilterDropdown";
import { applications as allApplications } from "../../constants/application";
import StyledHeading from "../styled/StyledHeading";

const ApplicationQueue = ({ onSelectApplication }) => {
  const [filter, setFilter] = useState("");
  const [filteredApplications, setFilteredApplications] = useState([]);

  const applicationColumns = [
    { id: "id", label: "ID" },
    { id: "property_id", label: "Property Id" },
    { id: "status", label: "Status" },
    { id: "action", label: "Action" },
  ];

  const applications = useMemo(() => {
    return allApplications || [];
  }, []);

  useEffect(() => {
    const filtered = applications.filter((app) => {
      if (filter.startsWith("Property ID: ")) {
        const selectedPropertyId = filter.replace("Property ID: ", "");
        return app.property_id === selectedPropertyId;
      } else if (filter.startsWith("Status: ")) {
        const selectedStatus = filter.replace("Status: ", "");
        return app.status === selectedStatus;
      }
      return true;
    });
    setFilteredApplications(filtered.length ? filtered : applications);
  }, [filter, applications]);

  const searchOptions = useMemo(() => {
    const propertyIdOptions = [
      ...new Set(applications.map((app) => `Property ID: ${app.property_id}`)),
    ];
    const statusOptions = [
      ...new Set(applications.map((app) => `Status: ${app.status}`)),
    ];
    return [...propertyIdOptions, ...statusOptions];
  }, [applications]);

  const handleView = (application) => {
    onSelectApplication(application);
  };

  return (
    <Box sx={{ p: 2 }}>
      <StyledHeading >Property Application Queue</StyledHeading>
      <FilterDropdown
        options={searchOptions}
        label="Search by Property ID or Status"
        value={filter}
        onChange={(event, newValue) => setFilter(newValue || "")}
      />

      <AppTable
        columns={applicationColumns}
        data={
          filteredApplications.length > 0 ? filteredApplications : applications
        }
        onView={handleView}
        loading={false}
      />
    </Box>
  );
};

export default ApplicationQueue;
