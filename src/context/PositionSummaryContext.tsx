import React, { createContext, useContext, useState, useEffect } from "react";
import { PositionSummaryResponse } from "../utils/interface";
import { getPositionSummary } from "../api/api";

type PositionSummaryContextType = {
  summary: PositionSummaryResponse | undefined;
  setSummary: React.Dispatch<React.SetStateAction<PositionSummaryResponse | undefined>>;
  fetchSummary: () => Promise<void>;
};

const PositionSummaryContext = createContext<PositionSummaryContextType | undefined>(undefined);

export const PositionSummaryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [summary, setSummary] = useState<PositionSummaryResponse>();

  const fetchSummary = async () => {
    try {
      const data = await getPositionSummary();
      setSummary(data);
    } catch (error) {
      console.error("Error fetching position summary:", error);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  return (
    <PositionSummaryContext.Provider value={{ summary, setSummary, fetchSummary }}>
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