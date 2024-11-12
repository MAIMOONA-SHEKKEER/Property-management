import React, { useState, useMemo, useEffect } from "react";
import { Box } from "@mui/material";
import FilterDropdown from "../styled/FilterDropdown";
import { applications as allApplications } from "../../constants/application";
import StyledHeading from "../styled/StyledHeading";
import ApplicationStatusSection from "./ApplicationStatusSection";

const ApplicationQueue = ({ onSelectApplication }) => {
  const [filter, setFilter] = useState("");
  const [filteredApplications, setFilteredApplications] = useState([]);

  const applications = useMemo(() => allApplications || [], []);

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

  const applicationsByStatus = useMemo(() => {
    return filteredApplications.reduce((acc, app) => {
      acc[app.status] = acc[app.status] ? [...acc[app.status], app] : [app];
      return acc;
    }, {});
  }, [filteredApplications]);

  return (
    <Box sx={{ p: 2 }}>
      <StyledHeading>Property Application Queue</StyledHeading>
      <FilterDropdown
        options={searchOptions}
        label="Search by Property ID or Status"
        value={filter}
        onChange={(event, newValue) => setFilter(newValue || "")}
      />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {Object.keys(applicationsByStatus).map((status) => (
          <ApplicationStatusSection
            key={status}
            status={status}
            applications={applicationsByStatus[status]}
            onSelectApplication={onSelectApplication}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ApplicationQueue;
