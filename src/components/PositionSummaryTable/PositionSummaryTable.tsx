import React from "react";
import { PositionSummary } from "../../utils/interface";
import "./PositionSummaryTable.css";
import { EventCard } from "./EventCard/EventCard";

export interface PositionSummaryTableProps {
  summary: PositionSummary[] | undefined;
}

export const PositionSummaryTable: React.FC<PositionSummaryTableProps> = ({
  summary,
}) => {
  return (
    <div className="PositionSummaryTable">
      <h2>Position Summary Table</h2>
      <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Security</th>
            <th>Quantity</th>
            <th>Events</th>
          </tr>
        </thead>
        <tbody>
          {summary?.map((item, index) => (
            <tr key={index}>
              <td>{item.account}</td>
              <td>{item.security}</td>
              <td>{item.quantity}</td>
              <td>
                {item.events.map((event, i) => (
                  <EventCard key={i} event={event} />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
