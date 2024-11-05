// src/components/PropertyOnboarding.js
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Checkbox,
  FormControlLabel,
  TextField,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Send, Add, UploadFile, Download as DownloadIcon, AttachFile as AttachFileIcon } from '@mui/icons-material';

function PropertyOnboarding() {
  const [step, setStep] = useState(1);
  const [additionalDetails, setAdditionalDetails] = useState({
    totalUnits: '',
    unitTypes: '',
    rentalAmount: '',
    rentalDeposit: '',
    rentalExtras: '',
    adminFee: '',
  });
  const [leaseDocumentChoice, setLeaseDocumentChoice] = useState('template');
  const [customDocument, setCustomDocument] = useState('');

  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handlePreviousStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleLeaseDocumentChange = (e) => {
    setLeaseDocumentChoice(e.target.value);
  };

  const handleCustomDocumentChange = (e) => {
    setCustomDocument(e.target.value);
  };

  const handleDownloadTemplate = () => {
    window.open('https://s3.amazonaws.com/yourbucket/document-service/get/application_to_lease_doc.pdf', '_blank');
  };

  const handleSubmitAdditionalDetails = () => {
    console.log('Submitting additional details:', additionalDetails);
    // Make an API call to endpoint `prop-management-service/additionalDetails` here
    // For example:
    // axios.post('/prop-management-service/additionalDetails', additionalDetails)
    //   .then(response => console.log('Details submitted:', response))
    //   .catch(error => console.error('Error submitting details:', error));
  };

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 6, px: 3 }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
        Property Application Onboarding - Step {step}
      </Typography>

      {/* Step 1: Basic Property Summary */}
      {step === 1 && (
        <Card variant="outlined" sx={{ p: 3, mb: 5, backgroundColor: '#f7f9fc', borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#3f51b5', mb: 2 }}>
              Step 1: Basic Property Summary
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Please provide basic details to create a new property application.
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Property Alias" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Property Type" fullWidth variant="outlined" placeholder="Select from available types" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Company Name" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Property Address" fullWidth variant="outlined" placeholder="Use Google API for accuracy" />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" component="label" fullWidth startIcon={<UploadFile />}>
                  Upload Supporting Documents
                  <input hidden multiple type="file" />
                </Button>
                <Typography variant="caption" display="block" color="textSecondary">
                  Optional uploads: ID, Title Deed, Proof of Residence, or CIPC document (if property belongs to a company).
                </Typography>
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }} onClick={handleNextStep}>
              Continue to Legal
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Legal Terms */}
      {step === 2 && (
        <Card variant="outlined" sx={{ p: 3, mb: 5, backgroundColor: '#f7f9fc', borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#3f51b5', mb: 2 }}>
              Step 2: Legal Terms
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Accept our terms and conditions to proceed with the property registration.
            </Typography>

            <FormControlLabel
              control={<Checkbox required />}
              label="I accept the Terms and Conditions"
              sx={{ mt: 2 }}
            />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }} onClick={handleNextStep}>
              Continue to PM Invitation
            </Button>
            <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={handlePreviousStep}>
              Back to Property Summary
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 3: PM Invitation */}
      {step === 3 && (
        <Card variant="outlined" sx={{ p: 3, mb: 5, backgroundColor: '#f7f9fc', borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#3f51b5', mb: 2 }}>
              Step 3: Property Manager (PM) Invitation
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              You have the option to invite a Property Manager (PM) to manage the property and tenants on your behalf. This step is optional.
            </Typography>

            {/* Invitation Options */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Send />}>
                  Send Invitation to PM
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" fullWidth startIcon={<Add />}>
                  Select PM from System
                </Button>
              </Grid>
            </Grid>

            <Typography variant="caption" display="block" color="textSecondary" sx={{ mb: 2 }}>
              Invitations are valid for 5 days. You can extend the validity period if needed.
            </Typography>

            {/* Terms and Conditions for PM */}
            <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
              Once a PM accepts the invitation, they will have full permissions to manage this property and onboard tenants. They must accept terms and conditions to proceed.
            </Typography>
            <FormControlLabel
              control={<Checkbox required />}
              label="I accept the Terms and Conditions on behalf of the invited PM"
              sx={{ mt: 2 }}
            />

            <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }} onClick={handleNextStep}>
              Complete Application
            </Button>
            <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={handlePreviousStep}>
              Back to Legal Terms
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Subscription */}
      {step === 4 && (
        <Card variant="outlined" sx={{ p: 3, mb: 5, backgroundColor: '#f7f9fc', borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#3f51b5', mb: 2 }}>
              Step 4: Subscription
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Please select your desired subscription model for our rental management app. The first month is free!
            </Typography>

            {/* Subscription Options */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth>
                  View Subscription Options
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" fullWidth>
                  Activate Subscription
                </Button>
              </Grid>
            </Grid>

            <Typography variant="caption" display="block" color="textSecondary" sx={{ mb: 2 }}>
              Your selected subscription will take effect once the property is active.
            </Typography>

            <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }} onClick={handleNextStep}>
              Continue to Lease Templates
            </Button>
            <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={handlePreviousStep}>
              Back to PM Invitation
            </Button>
          </CardContent>
        </Card>
      )}

{step === 5 && (
        <Card variant="outlined" sx={{ p: 3, mb: 5, backgroundColor: '#f7f9fc', borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#3f51b5', mb: 2 }}>
              Step 5: Property Setup Configuration
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Total Units"
                  name="totalUnits"
                  fullWidth
                  variant="outlined"
                  value={additionalDetails.totalUnits}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Unit Types (e.g., 1BHK, 2BHK)"
                  name="unitTypes"
                  fullWidth
                  variant="outlined"
                  value={additionalDetails.unitTypes}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Rental Amount"
                  name="rentalAmount"
                  fullWidth
                  variant="outlined"
                  value={additionalDetails.rentalAmount}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Rental Deposit"
                  name="rentalDeposit"
                  fullWidth
                  variant="outlined"
                  value={additionalDetails.rentalDeposit}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Rental Extras"
                  name="rentalExtras"
                  fullWidth
                  variant="outlined"
                  value={additionalDetails.rentalExtras}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Admin Fee"
                  name="adminFee"
                  fullWidth
                  variant="outlined"
                  value={additionalDetails.adminFee}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmitAdditionalDetails} sx={{ mt: 3 }}>
              Submit Additional Details
            </Button>
            <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={handleNextStep}>
              Continue to Application to Lease Templates
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 6: Application to Lease Templates */}
      {step === 6 && (
        <Card variant="outlined" sx={{ p: 3, mb: 5, backgroundColor: '#f7f9fc', borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#3f51b5', mb: 2 }}>
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
              <FormControlLabel value="template" control={<Radio />} label="Use Existing Template" />
              <FormControlLabel value="custom" control={<Radio />} label="Upload Custom Document" />
            </RadioGroup>

            {leaseDocumentChoice === 'template' && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  Download our template to fill in the required details:
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DownloadIcon />}
                  onClick={handleDownloadTemplate}
                >
                  Download Template
                </Button>
              </Box>
            )}

            {leaseDocumentChoice === 'custom' && (
              <TextField
                label="Upload Custom Document"
                fullWidth
                type="file"
                onChange={handleCustomDocumentChange}
                sx={{ mb: 3 }}
              />
            )}

            <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={handlePreviousStep}>
              Back to Property Setup Configuration
            </Button>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

export default PropertyOnboarding;
