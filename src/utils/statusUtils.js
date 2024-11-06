import { Chip } from "@mui/material";

export const getStatusChip = (status) => {
  switch (status) {
    case 'Approved':
      return <Chip color="success" label="Approved" />;
    case 'Pending':
      return <Chip color="warning" label="Pending" />;
    case 'Conditionally Approved':
      return <Chip color="info" label="Conditionally Approved" />;
    case 'Declined':
      return <Chip color="error" label="Declined" />;
    default:
      return <Chip color="default" label={status} />;
  }
};
