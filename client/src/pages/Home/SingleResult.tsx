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
    <div onClick={onClick}>
      <img src={imgUrl} alt="search-result-image" />
      <h2>{entityName}</h2>
    </div>
  );
};

export default SingleResult;
