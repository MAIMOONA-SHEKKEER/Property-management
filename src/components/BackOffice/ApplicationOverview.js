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

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
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
          onPrevStep={handlePrevStep}
        />
      )}
      {step === 3 && selectedApplication && (
        <ReviewOutcome
          application={selectedApplication}
          onPrevStep={handlePrevStep}
        />
      )}
    </div>
  );
};

export default ApplicationOverview;
