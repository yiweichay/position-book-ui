import { TradeEventRequest } from "../utils/interface";

const url = "http://localhost:8080/api";

export const getPositionSummary = async () => {
  try {
    const response = await fetch(`${url}/getPositionSummary`,{method: 'GET'} );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch position summary:", error);
    throw error;
  }
}

export const createTradeEvent = async (eventData: TradeEventRequest) => {
    try {
        const response = await fetch(`${url}/createEvent`, { 
            method: 'POST', 
            body: JSON.stringify(eventData), 
            headers: { 'Content-Type': 'application/json' } });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to create event:", error);
        throw error;
    }
}