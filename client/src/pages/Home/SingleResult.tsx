import React from "react";
import "./css//SingleResult.css";

interface SingleResultProps {
  onClick: () => void;
  imgUrl?: string;
  entityName: string;
}

const SingleResult: React.FC<SingleResultProps> = ({
  onClick,
  entityName,
  imgUrl,
}) => {
  return (
    <div onClick={onClick} className="card">
      <img src={imgUrl} alt="search-result-image" className="detail-img" />
      <h2>{entityName}</h2>
    </div>
  );
};

export default SingleResult;
