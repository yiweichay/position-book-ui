import React, { useEffect, useState } from "react";
import { getPositionSummary } from "../api/api";
import { PositionSummaryTable } from "../components/PositionSummaryTable/PositionSummaryTable";
import { PositionSummaryResponse } from "../utils/interface";

export const PositionSummaryPage = () => {

  const [summary, setSummary] = useState<PositionSummaryResponse>();

  const fetchPositionSummary = async () => {
    try {
      const response = await getPositionSummary();
      console.log("Position Summary:", response);
      setSummary(response);
    } catch (error) {
      console.error("Error fetching position summary:", error);
    }
  };

  useEffect(() => {
    fetchPositionSummary();
  }, []);

  return (
    <div className="position-summary-wrapper">
      <PositionSummaryTable summary={summary?.positions}/>
    </div>
  );
};
