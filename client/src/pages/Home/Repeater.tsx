import React from "react";
import { useNavigate } from "react-router-dom";
import SingleResult from "./SingleResult";
import CategoryHeader from "../../components/CategoryHeader";
import placeholderImg from "../../assets/placeholder.png";
import "./css//Repeater.css";

interface RepeaterProps {
  data: any[];
  searched: boolean;
}

const Repeater: React.FC<RepeaterProps> = ({ data, searched }) => {
  const navigate = useNavigate();
  const goToDetail = (id: string) => navigate(`/detail/${id}`);

  if (data.length === 0) {
    return searched === true ? (
      <p className="nothing-message">No results found!</p>
    ) : (
      <p className="nothing-message">
        Start by using the search bar at the top!
      </p>
    );
  }

  let previousSportName = "";

  return (
    <div className="rep-wrapper">
      {data.map((item) => {
        const sportChanged = item.sport.name !== previousSportName;
        previousSportName = item.sport.name;

        return (
          <div key={item.id} className="rep-container">
            {sportChanged && <CategoryHeader content={item.sport.name} />}
            <SingleResult
              imgUrl={
                item.images[0]?.path !== undefined
                  ? `https://www.livesport.cz/res/image/data/${item.images[0]?.path}`
                  : placeholderImg
              }
              entityName={item.name}
              onClick={() => goToDetail(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Repeater;
