import React from "react";
import Button from "./Button";

interface AlertProps {
  message: string;
  onClick: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClick }) => {
  return (
    <div className="alert-bg">
      <div className="alert-card">
        {message}
        <Button content={"Obnovit"} onClick={onClick} />
      </div>
    </div>
  );
};

export default Alert;
