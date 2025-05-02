import React from "react";
import { useNavigate } from "react-router-dom";
import SingleResult from "./SingleResult";
import CategoryHeader from "../../components/CategoryHeader";
import placeholderImg from "../../assets/placeholder.jpg";

interface RepeaterProps {
  data: {
    id: string;
    name: string;
    imageUrl: string | null;
    sportName: string;
  }[];
}

const Repeater: React.FC<RepeaterProps> = ({ data }) => {
  const navigate = useNavigate();
  const onClick = (id: string) => navigate(`/detail/${id}`);

  if (!data) return <p>Nebyly nalezeny žádné výsledky!</p>;

  let previousSportName = "";

  return (
    <div>
      {data.map((item) => {
        const sportChanged = item.sportName !== previousSportName;
        previousSportName = item.sportName;

        return (
          <div key={item.id}>
            {sportChanged && <CategoryHeader content={item.sportName} />}
            <SingleResult
              imgUrl={item.imageUrl || placeholderImg}
              entityName={item.name}
              onClick={() => onClick(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Repeater;
