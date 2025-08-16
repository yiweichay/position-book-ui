import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PositionSummary } from "./PositionSummary";
import { CreateEvent } from "./CreateEvent";
import { Navbar } from "../components/Navbar/Navbar";

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="position-summary" replace />} />
        <Route path="position-summary" element={<PositionSummary />} />
        <Route path="create-event" element={<CreateEvent />} />
      </Routes>
    </div>
  );
};
