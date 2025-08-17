import React, { useState } from "react";
import { TradeEvent } from "../utils/interface";
import { createTradeEvent } from "../api/api";
import { TradeEventForm } from "../components/TradeEventForm/TradeEventForm";
import { ErrorPopUp } from "../components/ErrorPopUp/ErrorPopUp";

export const CreateEvent = () => {
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (events: TradeEvent[]) => {
    try {
      await createTradeEvent({ events });
    } catch (error: any) {
      if (error.status) {
        setError(`Error ${error.status}: ${error.message}`);
      } else {
        setError(error.message || "An unknown error occurred.");
      }
    }
  };

  const closePopUp = () => {
    setError(null);
  };

  return (
    <div className="trade-event-wrapper">
      <TradeEventForm handleFormSubmit={handleFormSubmit} />
      {error && <ErrorPopUp message={error} onClose={closePopUp} />}
    </div>
  );
};
