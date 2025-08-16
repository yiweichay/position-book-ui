export interface TradeEvent {
    id: number;
    action: TradeAction;
    account: string;
    security: string;
    quantity: number;
}

export interface TradeEventRequest {
    events: TradeEvent[];
}

export enum TradeAction {
    BUY = "BUY",
    SELL = "SELL",
    CANCEL = "CANCEL"
}

export interface PositionSummary {
    account: string;
    security: string;
    quantity: number;
    events: TradeEvent[];
}

export interface PositionSummaryResponse {
    positions: PositionSummary[];
}