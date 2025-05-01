import React, { CSSProperties, ReactNode } from "react";
import "./css//Button.css";

interface ButtonProps {
  style?: CSSProperties;
  content: ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ style, content, onClick }) => {
  return (
    <div style={style} className="btn" onClick={onClick}>
      {content}
    </div>
  );
};

export default Button;
