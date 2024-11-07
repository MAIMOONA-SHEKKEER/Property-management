import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  color:"#3f51b5",
  marginBottom: theme.spacing(2),
  fontSize:30,
}));

export default StyledHeading;
