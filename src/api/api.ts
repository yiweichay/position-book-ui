import { TradeEventRequest } from "../utils/interface";

const url = "http://localhost:8080/api";

export const getPositionSummary = async () => {
  try {
    const response = await fetch(`${url}/getPositionSummary`, {
      method: "GET",
    });
    if (response.status === 500) {
      throw new Error(
        "Internal Server Error: Unable to fetch position summary"
      );
    } else if (response.status === 404) {
      throw new Error(
        "404 Not Found: API to fetch position summary does not exist"
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch position summary:", error);
    throw error;
  }
};

export const createTradeEvent = async (eventData: TradeEventRequest) => {
  try {
    const response = await fetch(`${url}/createEvent`, {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      const error: any = new Error(`Request failed with status ${response.status}`);
      error.status = response.status;
      throw error;
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to create event:", error);
    throw error;
  }
};
