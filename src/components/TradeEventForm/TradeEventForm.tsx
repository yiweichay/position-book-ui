import { useState } from "react";
import { TradeEventBlock } from "../TradeEventBlock/TradeEventBlock";
import { TradeAction, TradeEvent } from "../../utils/interface";

export const TradeEventForm = () => {
  const [tradeEvents, setTradeEvents] = useState<TradeEvent[]>([
    { id: 0, action: TradeAction.BUY, account: "", security: "", quantity: 0 },
  ]);

  const handleSubmit = () => {};

  const addTradeEvent = () => {
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
  };

  return (
    <div className="TradeEventForm">
      <form onSubmit={handleSubmit}>
        {tradeEvents.map((event, index) => (
          <TradeEventBlock
            event={event}
            onChange={(field, value) => handleEventChange(index, field, value)}
          />
        ))}
        <button type="button" onClick={addTradeEvent}>
          Add Event
        </button>
      </form>
    </div>
  );
};
