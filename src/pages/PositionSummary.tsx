import React, {useEffect } from 'react'
import { getPositionSummary } from '../api/api';

export const PositionSummary = () => {

    useEffect(() => {
        console.log(getPositionSummary());

    }, []);
  return (
    <div>
      <h2>Position Summary</h2>
      {/* Components to display position summary will go here */}
    </div>
  )
}