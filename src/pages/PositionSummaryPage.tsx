import { PositionSummaryTable } from "../components/PositionSummaryTable/PositionSummaryTable";
import { ErrorPopUp } from "../components/ErrorPopUp/ErrorPopUp";
import { usePositionSummary } from "../context/PositionSummaryContext";

export const PositionSummaryPage = () => {
  const { summary, positionSummaryError, setPositionSummaryError } = usePositionSummary();

  const closePopUp = () => {
    setPositionSummaryError(null);
  };

  return (
    <div className="position-summary-wrapper">
      <PositionSummaryTable summary={summary?.positions} />
      {positionSummaryError && <ErrorPopUp message={positionSummaryError} onClose={closePopUp} />}
    </div>
  );
};
