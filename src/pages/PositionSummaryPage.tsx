import React, { useState } from "react";
import { PositionSummaryTable } from "../components/PositionSummaryTable/PositionSummaryTable";
import { ErrorPopUp } from "../components/ErrorPopUp/ErrorPopUp";
import { usePositionSummary } from "../context/PositionSummaryContext";

export const PositionSummaryPage = () => {
  const [error, setError] = useState<string | null>(null);
  const { summary } = usePositionSummary();

  const closePopUp = () => {
    setError(null);
  };

  return (
    <div className="position-summary-wrapper">
      <PositionSummaryTable summary={summary?.positions} />
      {error && <ErrorPopUp message={error} onClose={closePopUp} />}
    </div>
  );
};
