import React from "react";
import Button from "../../components/Button";

interface SearchAreaProps {
  onClick: () => void;
}

const SearchArea: React.FC<SearchAreaProps> = ({ onClick }) => {
  return (
    <>
      <div className="top-line"></div>
      <input type="search" id="search"></input>
      <Button content={"Hledat"} onClick={onClick} />
      <div className="bottom-line">
        <Button content={"Vše"} onClick={onClick} />
        <Button content={"Soutěže"} onClick={onClick} />
        <Button content={"Týmy"} onClick={onClick} />
        <Button content={"Hráči"} onClick={onClick} />
      </div>
    </>
  );
};

export default SearchArea;
