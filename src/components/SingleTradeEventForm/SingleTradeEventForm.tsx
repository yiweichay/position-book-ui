import { TradeAction, TradeEvent } from "../../utils/interface";
import "./SingleTradeEventForm.css";

interface SingleTradeEventFormProps {
  event: TradeEvent;
  onChange: (field: string, value: string | number) => void;
}

export const SingleTradeEventForm: React.FC<SingleTradeEventFormProps> = ({
  event,
  onChange,
}) => {
  return (
    <div className="TradeEventBlock">
      <div className="form-group">
        <label htmlFor={`id-${event.id}`}>ID</label>
        <input
          type="number"
          id={`id-${event.id}`}
          name="id"
          value={event.id}
          onChange={(e) => onChange("id", e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`action-${event.id}`}>Action</label>
        <select
          id={`action-${event.id}`}
          name="action"
          value={event.action}
          onChange={(e) => onChange("action", e.target.value)}
          required
        >
          <option value={TradeAction.BUY}>Buy</option>
          <option value={TradeAction.SELL}>Sell</option>
          <option value={TradeAction.CANCEL}>Cancel</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor={`account-${event.id}`}>Account Name</label>
        <input
          type="text"
          id={`account-${event.id}`}
          name="account"
          value={event.account}
          onChange={(e) => onChange("account", e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`security-${event.id}`}>Security Name</label>
        <input
          type="text"
          id={`security-${event.id}`}
          name="security"
          value={event.security}
          onChange={(e) => onChange("security", e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={`quantity-${event.id}`}>Quantity</label>
        <input
          type="number"
          id={`quantity-${event.id}`}
          name="quantity"
          value={event.quantity}
          onChange={(e) => onChange("quantity", e.target.value)}
          required
        />
      </div>
    </div>
  );
};
