import { useState } from "react";
import { SingleTradeEventForm } from "../SingleTradeEventForm/SingleTradeEventForm";
import { TradeAction, TradeEvent } from "../../utils/interface";
import "./TradeEventForm.css";

export interface TradeEventFormProps {
  handleFormSubmit: (events: TradeEvent[]) => void;
}

export const TradeEventForm: React.FC<TradeEventFormProps> = ({
  handleFormSubmit,
}) => {
  const [tradeEvents, setTradeEvents] = useState<TradeEvent[]>([
    { id: 0, action: TradeAction.BUY, account: "", security: "", quantity: 0 },
  ]);

  const handleAddTradeEvent = () => {
    setTradeEvents([
      ...tradeEvents,
      {
        id: 0,
        action: TradeAction.BUY,
        account: "",
        security: "",
        quantity: 0,
      },
    ]);
  };

  const handleEventChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updatedEvents = [...tradeEvents];
    updatedEvents[index] = {
      ...updatedEvents[index],
      [field]: value,
    };
    setTradeEvents(updatedEvents);
    console.log("tradeEvents", tradeEvents);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormSubmit(tradeEvents);
  };

  return (
    <div className="TradeEventForm">
      <form onSubmit={handleSubmit}>
        {tradeEvents.map((event, index) => (
          <SingleTradeEventForm
            key={index}
            event={event}
            onChange={(field, value) => handleEventChange(index, field, value)}
          />
        ))}
        <div className="button-wrapper">
          <button type="button" onClick={handleAddTradeEvent}>
            Add Event
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
