import React from "react";
import Title from "../../components/Title";
import Repeater from "./Repeater";

const Results: React.FC = () => {
  //sem dostat vytrideny data z api res (vytrideny jako jsou mock data)
  const mockData = [
    {
      id: "1",
      name: "Novak Djokovic",
      imageUrl: "https://www.livesport.cz/res/image/data/tSfwGCdM-0rY6MEPI.png",
      sportName: "Basketball",
    },
    {
      id: "2",
      name: "Rafael Nadal",
      imageUrl: "https://www.livesport.cz/res/image/data/vYmjGJHD-3rP2ABCE.png",
      sportName: "Tennis",
    },
    {
      id: "3",
      name: "Roger Federer",
      imageUrl: null,
      sportName: "Football",
    },
  ];
  return (
    <div>
      <Title content={"Výsledky"} />
      {/* Vyhledávací pole jeste se musi udelat  */}
      <Repeater data={mockData} />
    </div>
  );
};

export default Results;
