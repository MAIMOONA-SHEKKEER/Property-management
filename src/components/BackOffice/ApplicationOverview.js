import React, { useState } from "react";
import ApplicationQueue from "./ApplicationQueue";
import ApplicationReview from "./ApplicationReview";
import ReviewOutcome from "./ReviewOutcome";

const ApplicationOverview = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [step, setStep] = useState(1);

  const handleSelectApplication = (application) => {
    setSelectedApplication(application);
    setStep(2);
  };

  const handleNextStep = () => {
    setStep(3);
  };

  return (
    <div>
      {step === 1 && (
        <ApplicationQueue onSelectApplication={handleSelectApplication} />
      )}
      {step === 2 && selectedApplication && (
        <ApplicationReview
          application={selectedApplication}
          onNextStep={handleNextStep}
        />
      )}
      {step === 3 && selectedApplication && (
        <ReviewOutcome application={selectedApplication} />
      )}
    </div>
  );
};

export default ApplicationOverview;
