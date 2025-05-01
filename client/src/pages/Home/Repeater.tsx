import React from "react";
import SingleResult from "./SingleResult";
import placeholderImg from "../../assets/placeholder.jpg";

interface RepeaterProps {
  data?: {
    id: string;
    name: string;
    imageUrl: string | null;
    sportName: string;
  }[];
}

const Repeater: React.FC<RepeaterProps> = ({ data }) => {
  //tu to jeste chce rozdelit vysledky do skupin podle sportu
  return data ? (
    data.map((item) => (
      <SingleResult
        key={item.id}
        imgUrl={item.imageUrl || placeholderImg}
        entityName={item.name}
      />
    ))
  ) : (
    <p>Nebyly nalezeny žádné výsledky!</p>
  );
};

export default Repeater;
