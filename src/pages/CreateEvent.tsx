import React, { useEffect } from 'react'
import { TradeAction, TradeEvent, TradeEventRequest } from '../utils/interface';
import { createTradeEvent } from '../api/api';
import { TradeEventForm } from '../components/TradeEventForm/TradeEventForm';

// const fakeEventData: TradeEvent = {
//     id: 1,
//     action: TradeAction.BUY,
//     account: "ACC1",
//     security: "SEC1",
//     quantity: 100
// }

// const fakeEvent: TradeEventRequest = {
//     events: [fakeEventData]
// }

export const CreateEvent = () => {

    // useEffect(() => {
    //     const response = createTradeEvent(fakeEvent);
    //     console.log(response);
    // }, []);

  return (
    <div>
      <TradeEventForm/>
    </div>
  )
}
