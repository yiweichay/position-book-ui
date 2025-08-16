import { TradeEvent } from "../../../utils/interface";
import "./EventCard.css";

export interface EventCardProps {
    event: TradeEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-details">
        <h3>Event ID: {event.id}</h3>
        <p>Action: {event.action}</p>
        <p>Account: {event.account}</p>
        <p>Security: {event.security}</p>
        <p>Quantity: {event.quantity}</p>
      </div>
    </div>
  );
}