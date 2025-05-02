import React from "react";
import Button from "../../components/Button";
import "./css//SearchArea.css";

interface SearchAreaProps {
  onClick: () => void;
}

const SearchArea: React.FC<SearchAreaProps> = ({ onClick }) => {
  return (
    <>
      <div className="top-line">
        <input type="search" id="search" placeholder="search ..."></input>
        <Button content={"search"} onClick={onClick} />
      </div>
      <div className="bottom-line">
        <Button content={"all"} onClick={onClick} />
        <Button content={"competitions"} onClick={onClick} />
        <Button content={"Teams"} onClick={onClick} />
        <Button content={"Participants"} onClick={onClick} />
      </div>
    </>
  );
};

export default SearchArea;
