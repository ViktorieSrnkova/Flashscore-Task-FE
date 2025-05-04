import React, { CSSProperties, ReactNode } from "react";
import "./css//Button.css";

interface ButtonProps {
  style?: CSSProperties;
  content: ReactNode;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  style,
  content,
  onClick,
  active,
  disabled,
}) => {
  return (
    <div
      role="button"
      style={style}
      className={`btn ${active ? "active" : ""} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default Button;
