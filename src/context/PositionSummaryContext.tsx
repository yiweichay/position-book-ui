import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
  useMemo,
} from "react";
import { PositionSummaryResponse } from "../utils/interface";
import { getPositionSummary } from "../api/api";

export interface PositionSummaryContextType {
  summary: PositionSummaryResponse;
  positionSummaryError: string;
  fetchSummary: () => Promise<void>;
  setSummary: React.Dispatch<React.SetStateAction<PositionSummaryResponse>>;
  setPositionSummaryError: React.Dispatch<React.SetStateAction<string>>;
}

const PositionSummaryContext = createContext<PositionSummaryContextType>({
  summary: {},
  positionSummaryError: '',
  fetchSummary: async () => {},
  setSummary: () => {},
  setPositionSummaryError: () => {},
});

export const PositionSummaryProvider = ({ children }: PropsWithChildren) => {
  const [summary, setSummary] = useState<PositionSummaryResponse>({});
  const [positionSummaryError, setPositionSummaryError] = useState<string>('');

  const fetchSummary = async () => {
    try {
      const data = await getPositionSummary();
      setSummary(data);
    } catch (error: any) {
      console.error("Error fetching position summary:", error);
      setPositionSummaryError(
        error.message ||
          "An error occurred while fetching the position summary."
      );
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  const value = useMemo(
    () => ({
      summary,
      setSummary,
      fetchSummary,
      positionSummaryError,
      setPositionSummaryError,
    }),
    [summary, positionSummaryError]
  );

  return (
    <PositionSummaryContext.Provider value={value}>
      {children}
    </PositionSummaryContext.Provider>
  );
};

export const usePositionSummary = () => useContext(PositionSummaryContext);
