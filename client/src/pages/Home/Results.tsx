import React from "react";
import Title from "../../components/Title";
import Repeater from "./Repeater";
import SearchArea from "./SearchArea";

const Results: React.FC = () => {
  //sem dostat vytrideny data z api res (vytrideny jako jsou mock data)
  const mockData = [
    {
      id: "1",
      name: "Novak Djokovic",
      imageUrl: "https://www.livesport.cz/res/image/data/tSfwGCdM-0rY6MEPI.png",
      sportName: "Football",
    },
    {
      id: "2",
      name: "Rafael Nadal",
      imageUrl: null,
      sportName: "Tennis",
    },
    {
      id: "3",
      name: "Roger Federer",
      imageUrl: null,
      sportName: "Football",
    },
  ];

  const doNothing = () => {
    console.log("MockData in Results:", mockData);
  };
  const sortedData = mockData.sort((a, b) =>
    a.sportName.localeCompare(b.sportName)
  );
  return (
    <div>
      <Title content={"Výsledky"} />
      <SearchArea onClick={doNothing} />
      <Repeater data={sortedData} />
    </div>
  );
};

export default Results;
