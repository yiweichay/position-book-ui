import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PositionSummaryPage } from "./PositionSummaryPage";
import { CreateEvent } from "./CreateEvent";
import { Navbar } from "../components/Navbar/Navbar";

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="position-summary" replace />} />
        <Route path="position-summary" element={<PositionSummaryPage />} />
        <Route path="create-event" element={<CreateEvent />} />
      </Routes>
    </div>
  );
};
