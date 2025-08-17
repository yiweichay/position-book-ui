import React, { useEffect, useState } from "react";
import { getPositionSummary } from "../api/api";
import { PositionSummaryTable } from "../components/PositionSummaryTable/PositionSummaryTable";
import { PositionSummaryResponse } from "../utils/interface";
import { ErrorPopUp } from "../components/ErrorPopUp/ErrorPopUp";

export const PositionSummaryPage = () => {

  const [summary, setSummary] = useState<PositionSummaryResponse>();
  const [error, setError] = useState<string | null>(null);

  const fetchPositionSummary = async () => {
    try {
      const response = await getPositionSummary();
      setSummary(response);
    } catch (error: any) {
      console.error("Error fetching position summary:", error);
      setError(error.message || "An error occurred while fetching the position summary.");
    }
  };

  const closePopUp = () => {
    setError(null);
  };

  useEffect(() => {
    fetchPositionSummary();
  }, []);

  return (
    <div className="position-summary-wrapper">
      <PositionSummaryTable summary={summary?.positions}/>
      {error && <ErrorPopUp message={error} onClose={closePopUp}/>}
    </div>
  );
};
