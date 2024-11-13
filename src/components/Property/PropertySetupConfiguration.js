import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import InputField from "../styled/InputField";
import StyledTypography from "../styled/StyledTypography";

const PropertySetupConfiguration = ({ handleNextStep, handlePreviousStep }) => {
  const [formData, setFormData] = useState({
    totalUnits: "",
    unitTypes: "",
    rentalAmount: "",
    rentalDeposit: "",
    rentalExtras: "",
    adminFee: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    if (errors[name]) {
      setErrors((prevState) => ({ ...prevState, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.totalUnits) {
      newErrors.totalUnits = "Total Units is required";
    }
    if (!formData.unitTypes) {
      newErrors.unitTypes = "Unit Types is required";
    }
    if (!formData.rentalAmount) {
      newErrors.rentalAmount = "Rental Amount is required";
    }
    if (!formData.rentalDeposit) {
      newErrors.rentalDeposit = "Rental Deposit is required";
    }
    if (!formData.rentalExtras) {
      newErrors.rentalExtras = "Rental Extras is required";
    }
    if (!formData.adminFee) {
      newErrors.adminFee = "Admin Fee is required";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      handleNextStep(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
        <StyledTypography>
          Step 5: Property Setup Configuration
        </StyledTypography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Please provide property configuration details to proceed.
        </Typography>

        <InputField
          label="Total Units"
          required
          name="totalUnits"
          value={formData.totalUnits}
          onChange={handleChange}
          error={!!errors.totalUnits}
          helperText={errors.totalUnits}
        />

        <InputField
          label="Unit Types"
          placeHolder="e.g., 1BHK, 2BHK"
          name="unitTypes"
          required
          value={formData.unitTypes}
          onChange={handleChange}
          error={!!errors.unitTypes}
          helperText={errors.unitTypes}
        />

        <InputField
          label="Rental Amount"
          name="rentalAmount"
          required
          value={formData.rentalAmount}
          onChange={handleChange}
          error={!!errors.rentalAmount}
          helperText={errors.rentalAmount}
        />

        <InputField
          label="Rental Deposit"
          name="rentalDeposit"
          required
          value={formData.rentalDeposit}
          onChange={handleChange}
          error={!!errors.rentalDeposit}
          helperText={errors.rentalDeposit}
        />

        <InputField
          label="Rental Extras"
          name="rentalExtras"
          required
          value={formData.rentalExtras}
          onChange={handleChange}
          error={!!errors.rentalExtras}
          helperText={errors.rentalExtras}
        />

        <InputField
          label="Admin Fee"
          name="adminFee"
          required
          value={formData.adminFee}
          onChange={handleChange}
          error={!!errors.adminFee}
          helperText={errors.adminFee}
        />

        <StyledButton
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          type="submit"
        >
          Next
        </StyledButton>
        <StyledButton
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handlePreviousStep}
        >
          Back
        </StyledButton>
      </>
    </form>
  );
};

export default PropertySetupConfiguration;
