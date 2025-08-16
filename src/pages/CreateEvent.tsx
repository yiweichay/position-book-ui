import React from 'react'
import { TradeEvent } from '../utils/interface';
import { createTradeEvent } from '../api/api';
import { TradeEventForm } from '../components/TradeEventForm/TradeEventForm';

export const CreateEvent = () => {

    const handleFormSubmit = async (events: TradeEvent[]) => {
        const response = await createTradeEvent({ events });
        if (response) {
            console.log("Event created successfully:", response);
        } else {
            console.error("Failed to create event");
        }
    }

  return (
    <div className = "trade-event-wrapper">
      <TradeEventForm handleFormSubmit={handleFormSubmit}/>
    </div>
  )
}
