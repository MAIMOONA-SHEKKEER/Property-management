import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";
import { StyledButton } from "../styled/StyledButton";
import InputField from "../styled/InputField";
import SelectDropdown from "../styled/SelectDropdown";
import StyledCard from "../styled/StyledCard";
import StyledTypography from "../styled/StyledTypography";

const BasicPropertySummary = ({ handleNextStep }) => {
  const [formData, setFormData] = useState({
    propertyAlias: "",
    propertyType: "",
    companyName: "",
    propertyAddress: "",
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
    if (!formData.propertyAlias) {
      newErrors.propertyAlias = "Property Alias is required";
    }
    if (!formData.propertyType) {
      newErrors.propertyType = "Property Type is required";
    }
    if (!formData.companyName) {
      newErrors.companyName = "Company Name is required";
    }
    if (!formData.propertyAddress) {
      newErrors.propertyAddress = "Property Address is required";
    } else if (formData.propertyAddress.length < 5) {
      newErrors.propertyAddress =
        "Property Address should be at least 5 characters long";
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

  const handlePropertyChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, propertyType: value }));

    if (errors.propertyType) {
      setErrors((prevState) => ({ ...prevState, propertyType: "" }));
    }
  };

  const isFormValid =
    Object.keys(errors).length === 0 &&
    Object.values(formData).every((value) => value !== "");

  return (
    <form onSubmit={handleSubmit}>
      <StyledCard>
        <StyledTypography>Step 1: Basic Property Summary</StyledTypography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Please provide basic details to create a new property application.
        </Typography>

        <InputField
          label="Property Alias"
          name="propertyAlias"
          value={formData.propertyAlias}
          onChange={handleChange}
          error={!!errors.propertyAlias}
          helperText={errors.propertyAlias}
        />

        <SelectDropdown
          label="Property Type"
          name="propertyType"
          value={formData.propertyType}
          onChange={handlePropertyChange}
          options={[
            "Residential",
            "Commercial",
            "Industrial",
            "Mixed-use",
            "Agricultural",
          ]}
          error={!!errors.propertyType}
          helperText={errors.propertyType}
        />

        <InputField
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          error={!!errors.companyName}
          helperText={errors.companyName}
        />

        <InputField
          label="Property Address"
          name="propertyAddress"
          placeholder="Use Google API for accuracy"
          value={formData.propertyAddress}
          onChange={handleChange}
          error={!!errors.propertyAddress}
          helperText={errors.propertyAddress}
        />

        <StyledButton
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          type="submit"
          disabled={!isFormValid}
        >
          Next
        </StyledButton>
      </StyledCard>
    </form>
  );
};

export default BasicPropertySummary;
