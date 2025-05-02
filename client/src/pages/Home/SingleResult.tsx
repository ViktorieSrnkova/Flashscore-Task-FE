import React from "react";

interface SingleResultProps {
  onClick?: () => void;
  imgUrl?: string;
  entityName: string;
}

const SingleResult: React.FC<SingleResultProps> = ({
  onClick,
  entityName,
  imgUrl,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default", // Indicate it's clickable
      }}
    >
      <img src={imgUrl} alt="search-result-image" />
      <h2>{entityName}</h2>
    </div>
  );
};

export default SingleResult;
