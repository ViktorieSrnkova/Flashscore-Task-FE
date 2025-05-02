import React from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import placeholderImg from "../../assets/placeholder.png";
import "./css//Detail.css";

const mockData = [
  {
    id: "1",
    name: "Novak Djokovic",
    imageUrl: "https://www.livesport.cz/res/image/data/tSfwGCdM-0rY6MEPI.png",
    sportName: "Football",
    country: "United states of America",
    gender: {
      name: "Male",
    },
  },
  {
    id: "2",
    name: "Rafael Nadal",
    imageUrl: null,
    sportName: "Tennis",
    country: "Spain",
    gender: {
      name: "Male",
    },
  },
  {
    id: "3",
    name: "Roger Federer",
    imageUrl: null,
    sportName: "Football",
    country: "Switzerland",
    gender: {
      name: "Male",
    },
  },
];

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const item = mockData.find((item) => item.id === id);

  if (!item) return <p>Item not found</p>;

  return (
    <div className="page">
      <Title content={"Detail"} />
      <div className="content-box">
        <img
          src={item.imageUrl || placeholderImg}
          alt={item.name}
          className="results-img"
        />
        <div className="right-side">
          <h2>Full name:</h2>
          <p>{item.name}</p>
          <h2>Country:</h2>
          <p>{item.country}</p>
          <h2>Sport: </h2>
          <p>{item.sportName}</p>
          <h2>Gender: </h2>
          <p>{item.gender.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
