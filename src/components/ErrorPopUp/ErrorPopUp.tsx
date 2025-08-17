import React, { useEffect } from "react";
import "./ErrorPopUp.css";

interface ErrorPopUpProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

export const ErrorPopUp: React.FC<ErrorPopUpProps> = ({
  message,
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="timed-popup-overlay">
      <div className="timed-popup-content">
        <p>{message}</p>
      </div>
    </div>
  );
};
