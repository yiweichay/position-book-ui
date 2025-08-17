import React, { createContext, useContext, useState, useEffect } from "react";
import { PositionSummaryResponse } from "../utils/interface";
import { getPositionSummary } from "../api/api";

type PositionSummaryContextType = {
  summary: PositionSummaryResponse | undefined;
  positionSummaryError: string | null;
  fetchSummary: () => Promise<void>;
  setSummary: React.Dispatch<React.SetStateAction<PositionSummaryResponse | undefined>>;
  setPositionSummaryError: React.Dispatch<React.SetStateAction<string | null>>;
};

const PositionSummaryContext = createContext<
  PositionSummaryContextType | undefined
>(undefined);

export const PositionSummaryProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [summary, setSummary] = useState<PositionSummaryResponse>();
  const [positionSummaryError, setPositionSummaryError] = useState<
    string | null
  >(null);

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

  return (
    <PositionSummaryContext.Provider
      value={{
        summary,
        setSummary,
        fetchSummary,
        positionSummaryError,
        setPositionSummaryError,
      }}
    >
      {children}
    </PositionSummaryContext.Provider>
  );
};

export const usePositionSummary = () => {
  const context = useContext(PositionSummaryContext);
  if (!context) {
    throw new Error(
      "usePositionSummary must be used within a PositionSummaryProvider"
    );
  }
  return context;
};
