import React, { useState } from "react";
import { TradeEvent } from "../utils/interface";
import { createTradeEvent } from "../api/api";
import { TradeEventForm } from "../components/TradeEventForm/TradeEventForm";
import { ErrorPopUp } from "../components/ErrorPopUp/ErrorPopUp";
import { usePositionSummary } from "../context/PositionSummaryContext";
import { useNavigate } from "react-router-dom";

export const CreateEvent = () => {
  const [error, setError] = useState<string>('');
  const { fetchSummary } = usePositionSummary();
  const navigate = useNavigate();

  const handleFormSubmit = async (events: TradeEvent[]) => {
    try {
      await createTradeEvent({ events });
      await fetchSummary();
      navigate("/position-summary");
    } catch (error: any) {
      setError(
        error.message || "An error occurred while creating trade event."
      );
    }
  };

  const closePopUp = () => {
    setError('');
  };

  return (
    <div className="trade-event-wrapper">
      <TradeEventForm handleFormSubmit={handleFormSubmit} />
      {error && <ErrorPopUp message={error} onClose={closePopUp} />}
    </div>
  );
};
