import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";

const LeaseTemplate = ({
  handlePreviousStep,
  handleCustomDocumentChange,
  handleDownloadTemplate,
  handleLeaseDocumentChange,
  leaseDocumentChoice,
  handleNextStep
}) => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{ p: 3, mb: 5, backgroundColor: "#f7f9fc", borderRadius: 2 }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{ fontWeight: "medium", color: "#3f51b5", mb: 2 }}
          >
            Step 6: Application to Lease Templates
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Choose a lease document option below:
          </Typography>

          <RadioGroup
            value={leaseDocumentChoice}
            onChange={handleLeaseDocumentChange}
            sx={{ mb: 3 }}
          >
            <FormControlLabel
              value="template"
              control={<Radio />}
              label="Use Existing Template"
            />
            <FormControlLabel
              value="custom"
              control={<Radio />}
              label="Upload Custom Document"
            />
          </RadioGroup>

          {leaseDocumentChoice === "template" && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                Download our template to fill in the required details:
              </Typography>
              <Button
                variant="contained"
                sx={{backgroundColor:"#3f51b5",color:"white"}}
                startIcon={<DownloadIcon />}
                onClick={handleDownloadTemplate}
              >
                Download Template
              </Button>
            </Box>
          )}

          {leaseDocumentChoice === "custom" && (
            <TextField
              label="Upload Custom Document"
              fullWidth
              type="file"
              onChange={handleCustomDocumentChange}
              sx={{ mb: 3 }}
            />
          )}
             <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleNextStep}
          >
            Next
          </Button>

          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 2 ,color:'#3f51b5'}}
            onClick={handlePreviousStep}
          >
            Back to Property Setup Configuration
          </Button>

        </CardContent>
      </Card>
    </>
  );
};

export default LeaseTemplate;
