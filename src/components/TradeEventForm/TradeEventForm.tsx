import { useCallback, useState } from "react";
import { SingleTradeEventForm } from "../SingleTradeEventForm/SingleTradeEventForm";
import { TradeAction, TradeEvent } from "../../utils/interface";
import "./TradeEventForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export interface TradeEventFormProps {
  handleFormSubmit: (events: TradeEvent[]) => void;
}

export const TradeEventForm: React.FC<TradeEventFormProps> = ({
  handleFormSubmit,
}) => {
  const [tradeEvents, setTradeEvents] = useState<TradeEvent[]>([
    { id: 0, action: TradeAction.BUY, account: "", security: "", quantity: 0 },
  ]);

  const handleAddTradeEvent = useCallback(() => {
    setTradeEvents((prev) => [
      ...prev,
      {
        id: 0,
        action: TradeAction.BUY,
        account: "",
        security: "",
        quantity: 0,
      },
    ]);
  }, []);

  const handleEventChange = useCallback(
    (index: number, field: string, value: string | number) => {
      setTradeEvents((prev) => {
        const updated = [...prev];
        updated[index] = { ...updated[index], [field]: value };
        return updated;
      });
    },
    []
  );

  const handleDeleteTradeEvent = useCallback((index: number) => {
    setTradeEvents((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormSubmit(tradeEvents);
  };

  return (
    <div className="TradeEventForm">
      <form onSubmit={handleSubmit}>
        {tradeEvents.map((event, index) => (
          <div key={index} className="trade-event-card">
            {tradeEvents.length > 1 && (
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={`delete-icon ${
                  tradeEvents.length > 1 ? "show" : ""
                }`}
                onClick={() => handleDeleteTradeEvent(index)}
              />
            )}
            <SingleTradeEventForm
              event={event}
              onChange={(field, value) =>
                handleEventChange(index, field, value)
              }
            />
          </div>
        ))}
        <div className="button-wrapper">
          <button type="button" onClick={handleAddTradeEvent}>
            Add Trade Event
          </button>
          <button type="submit" className="submit-button">
            Submit Event(s)
          </button>
        </div>
      </form>
    </div>
  );
};
