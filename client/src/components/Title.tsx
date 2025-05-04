import React from "react";
import "./css//Title.css";

interface TitleProps {
  content: string;
  onClick?: () => void;
}

const Title: React.FC<TitleProps> = ({ content, onClick }) => {
  return (
    <div className="title-wrapper">
      <h1 className={`title ${onClick && "clickable"}`} onClick={onClick}>
        {content}
      </h1>
    </div>
  );
};

export default Title;
