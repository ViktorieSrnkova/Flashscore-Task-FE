import React from "react";
import "./css//Title.css";

interface TitleProps {
  content: string;
}

const Title: React.FC<TitleProps> = ({ content }) => {
  return <h1 className="title">{content}</h1>;
};

export default Title;
