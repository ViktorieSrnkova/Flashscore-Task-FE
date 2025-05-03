import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../../components/Title";
import placeholderImg from "../../assets/placeholder.png";
import "./css//Detail.css";
import Button from "../../components/Button";
import { handleTypeFormatting } from "../../utils/formatData";

interface DetailProps {
  data: any[];
}

const Detail: React.FC<DetailProps> = ({ data }) => {
  const navigate = useNavigate();
  const goHome = () => navigate(`/`);
  const { id } = useParams<{ id: string }>();

  const item = data.find((item) => item.id === id);

  return (
    <div className="page">
      <Title content={"Detail"} />
      {!item ? (
        <div className="nothing">
          <p className="none">Item not found</p>
          <Button content={"Back to searching"} onClick={goHome} />
        </div>
      ) : (
        <div className="content-box">
          <img
            src={
              item.images[0]?.path !== undefined
                ? `https://www.livesport.cz/res/image/data/${item.images[0]?.path}`
                : placeholderImg
            }
            alt={item.name}
            className="results-img"
          />
          <div className="right-side">
            <h2>Full name:</h2>
            <p>{item.name}</p>
            <h2>Country:</h2>
            <p>{item.defaultCountry.name}</p>
            <h2>Sport: </h2>
            <p>{item.sport.name}</p>
            <h2>Gender: </h2>
            <p>{item.gender.name}</p>
            <h2>Role: </h2>
            <p>{handleTypeFormatting(item.type.name)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
