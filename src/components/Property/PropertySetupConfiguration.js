import React, { useState } from "react";
import { Divider, Box } from "@mui/material";
import ConfigurationForm from "./ConfigurationForm";
import AddRemoveConfiguration from "./AddRemoveConfiguration";
import StyledTypography from "../styled/StyledTypography";
import BackIcon from "../styled/BackIcon";
import NextButton from "../styled/NextButton";
import SaveButton from "../styled/SaveButton";
import CustomSubtitle from "../styled/CustomSubtitle";

const PropertySetupConfiguration = ({
  handleNextStep,
  handlePreviousStep,
  handleSaveData,
}) => {
  const [configurations, setConfigurations] = useState([
    {
      totalUnits: "",
      unitTypes: "",
      rentalAmount: "",
      rentalDeposit: "",
      rentalExtras: "",
      adminFee: "",
    },
  ]);

  const [errors, setErrors] = useState([]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setConfigurations((prevState) => {
      const updatedConfigs = [...prevState];
      updatedConfigs[index][name] = value;
      return updatedConfigs;
    });

    if (errors[index] && errors[index][name]) {
      setErrors((prevState) => {
        const updatedErrors = [...prevState];
        updatedErrors[index] = { ...updatedErrors[index], [name]: "" };
        return updatedErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = configurations.map((config) => {
      const configErrors = {};
      if (config.rentalAmount && isNaN(Number(config.rentalAmount))) {
        configErrors.rentalAmount = "Rental amount must be a number.";
      }
      if (config.rentalDeposit && isNaN(Number(config.rentalDeposit))) {
        configErrors.rentalDeposit = "Rental deposit must be a number.";
      }
      if (config.adminFee && isNaN(Number(config.adminFee))) {
        configErrors.adminFee = "Admin fee must be a number.";
      }
      return configErrors;
    });

    setErrors(newErrors);
    return newErrors.every(
      (configErrors) => Object.keys(configErrors).length === 0
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      handleNextStep(configurations);
    }
  };

  const handleSave = () => {
    if (validateForm()) {
      handleSaveData(configurations);
    }
  };

  const handleAddConfiguration = () => {
    setConfigurations((prevState) => [
      ...prevState,
      {
        totalUnits: "",
        unitTypes: "",
        rentalAmount: "",
        rentalDeposit: "",
        rentalExtras: "",
        adminFee: "",
      },
    ]);
    setErrors((prevState) => [...prevState, {}]);
  };

  const handleRemoveConfiguration = (index) => {
    const updatedConfigs = configurations.filter((_, idx) => idx !== index);
    setConfigurations(updatedConfigs);
    const updatedErrors = errors.filter((_, idx) => idx !== index);
    setErrors(updatedErrors);
  };

  const isAddButtonDisabled = configurations.every((config) =>
    Object.values(config).every((value) => value === "")
  );

  return (
    <form onSubmit={handleSubmit}>
      <>
        <BackIcon onClick={handlePreviousStep} />
        <StyledTypography>
          Step 5: Property Setup Configuration
        </StyledTypography>
        <Divider sx={{ mb: 2 }} />
        <CustomSubtitle text="Please provide property configuration details to proceed." />
        {configurations.map((config, index) => (
          <ConfigurationForm
            key={index}
            config={config}
            index={index}
            errors={errors}
            onChange={handleChange}
          />
        ))}
        <AddRemoveConfiguration
          onAdd={handleAddConfiguration}
          onRemove={() => handleRemoveConfiguration(configurations.length - 1)}
          canRemove={configurations.length > 1}
          isAddButtonDisabled={isAddButtonDisabled}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <SaveButton onClick={handleSave} sx={{ flex: 1, mr: 1 }} />
          <NextButton onClick={handleNextStep} sx={{ flex: 1, ml: 1 }} />
        </Box>
      </>
    </form>
  );
};

export default PropertySetupConfiguration;
