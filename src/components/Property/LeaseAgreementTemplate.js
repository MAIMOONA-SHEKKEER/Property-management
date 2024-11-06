import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  TextField,
  Grid,
  FormControlLabel,
  Switch,
  Alert,
  IconButton,
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';

function LeaseAgreementTemplates({handleNextStep,handlePreviousStep}) {
  const [leaseTemplates, setLeaseTemplates] = useState([]);
  const [emailTemplate, setEmailTemplate] = useState('');
  const [templateFile, setTemplateFile] = useState(null);
  const [warning, setWarning] = useState(false);

  const maxTemplates = 6; 

  const handleFileChange = (e) => {
    setTemplateFile(e.target.files[0]);
  };

  const handleUploadTemplate = () => {
    if (leaseTemplates.length >= maxTemplates) {
      setWarning(true);
      setLeaseTemplates((prev) => [...prev.slice(1), templateFile]);
    } else {
      setLeaseTemplates((prev) => [...prev, templateFile]);
    }
    // API call to save the template
    console.log('Uploading file:', templateFile.name);
  };

  const handleRemoveTemplate = (index) => {
    setLeaseTemplates((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEmailTemplateChange = (e) => {
    setEmailTemplate(e.target.value);
  };

  const handleSaveEmailTemplate = () => {
    // API call to save the email template
    console.log('Saving email template:', emailTemplate);
  };

  const handleActivateDeactivate = (index) => {
    setLeaseTemplates((prev) =>
      prev.map((template, i) =>
        i === index ? { ...template, active: !template.active } : template
      )
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card variant="outlined" sx={{ p: 3, mb: 5, backgroundColor: '#f7f9fc', borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#3f51b5', mb: 2 }}>
            Step 7: Property Lease Agreement Templates
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {warning && (
            <Alert severity="warning" onClose={() => setWarning(false)} sx={{ mb: 2 }}>
              Maximum template limit reached. The oldest template will be replaced.
            </Alert>
          )}

          {/* Lease Template Upload */}
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Upload Lease Agreement Template
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={8}>
              <TextField
                type="file"
                fullWidth
                onChange={handleFileChange}
                InputProps={{
                  endAdornment: (
                    <IconButton color="primary" onClick={handleUploadTemplate}>
                      <UploadIcon />
                    </IconButton>
                  ),
                }}
              />
            </Grid>
          </Grid>

          {/* Uploaded Templates List */}
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Uploaded Lease Agreement Templates
          </Typography>
          {leaseTemplates.map((template, index) => (
            <Card key={index} sx={{ p: 2, mb: 1, display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                {template.name || `Template ${index + 1}`}
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={template.active || false}
                    onChange={() => handleActivateDeactivate(index)}
                  />
                }
                label="Active"
              />
              <IconButton color="error" onClick={() => handleRemoveTemplate(index)}>
                <DeleteIcon />
              </IconButton>
            </Card>
          ))}

          <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#3f51b5', mt: 4, mb: 1 }}>
            Email Template for Lease Agreements
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Configure the email template to be sent with lease agreements.
          </Typography>
          <TextField
            label="Email Body Template"
            multiline
            fullWidth
            rows={4}
            value={emailTemplate}
            onChange={handleEmailTemplateChange}
            placeholder="Enter email body content..."
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleSaveEmailTemplate}>
            Save Email Template
          </Button>
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
            sx={{ mt: 2 }}
            onClick={handlePreviousStep}
          >
            Back to Application to lease template
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LeaseAgreementTemplates;
