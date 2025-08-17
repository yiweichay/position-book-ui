import { TradeAction } from "../utils/interface";
import { getPositionSummary, createTradeEvent } from "./api";

global.fetch = jest.fn();

describe("API Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch position summary successfully", async () => {
    const mockResponse = {
      Positions: [
        {
          Account: "ACC1",
          Security: "SEC1",
          Quantity: 100,
          Events: [
            {
              ID: 1,
              Action: "BUY",
              Account: "ACC1",
              Security: "SEC1",
              Quantity: 100,
            },
          ],
        },
      ],
    };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await getPositionSummary();
    expect(result).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:8080/api/getPositionSummary",
      {
        method: "GET",
      }
    );
  });

  it("should handle 500 Internal Server Error", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      status: 500,
      json: jest.fn().mockResolvedValue({ message: "Internal Server Error" }),
    });

    await expect(getPositionSummary()).rejects.toThrow(
      "Internal Server Error: Unable to fetch position summary"
    );
  });

  it("should handle 404 Not Found error", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      status: 404,
      json: jest.fn().mockResolvedValue({ message: "Not Found" }),
    });

    await expect(getPositionSummary()).rejects.toThrow(
      "404 Not Found: API to fetch position summary does not exist"
    );
  });

  it("should create trade event successfully", async () => {
    const mockEvent = {
      events: [
        {
          id: 1,
          action: TradeAction.BUY,
          account: "ACC1",
          security: "SEC1",
          quantity: 100,
        },
      ],
    };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockEvent),
    });

    const result = await createTradeEvent(mockEvent);
    expect(result).toEqual(mockEvent);
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:8080/api/createEvent",
      {
        method: "POST",
        body: JSON.stringify(mockEvent),
        headers: { "Content-Type": "application/json" },
      }
    );
  });

    it("should handle 500 Internal Server Error on create event", async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
        status: 500,
        json: jest.fn().mockResolvedValue({ message: "Internal Server Error" }),
        });
    
        await expect(createTradeEvent({ events: [] })).rejects.toThrow(
        "Internal Server Error: Unable to create position summary"
        );
    });

    it("should handle 404 Not Found error on create event", async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
        status: 404,
        json: jest.fn().mockResolvedValue({ message: "Not Found" }),
        });
    
        await expect(createTradeEvent({ events: [] })).rejects.toThrow(
        "404 Not Found: ID not found for trade cancellation"
        );
    });
});
