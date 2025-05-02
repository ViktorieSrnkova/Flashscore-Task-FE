import React from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import placeholderImg from "../../assets/placeholder.jpg";

const mockData = [
  {
    id: "1",
    name: "Novak Djokovic",
    imageUrl: "https://www.livesport.cz/res/image/data/tSfwGCdM-0rY6MEPI.png",
    sportName: "Football",
    country: "Serbia",
  },
  {
    id: "2",
    name: "Rafael Nadal",
    imageUrl: null,
    sportName: "Tennis",
    country: "Spain",
  },
  {
    id: "3",
    name: "Roger Federer",
    imageUrl: null,
    sportName: "Football",
    country: "Switzerland",
  },
];

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const item = mockData.find((item) => item.id === id);

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <Title content={item.name} />
      <img src={item.imageUrl || placeholderImg} alt={item.name} />
      <h2>Country: {item.country}</h2>
      <h2>Sport: {item.sportName}</h2>
    </div>
  );
};

export default Detail;
