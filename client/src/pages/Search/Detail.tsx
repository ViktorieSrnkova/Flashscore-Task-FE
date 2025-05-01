import React from "react";
import Title from "../../components/Title";

const Detail: React.FC = () => {
  // tady můžu vrátit i další informace ale musim je sem z api dostat
  return (
    <div>
      <Title content={"Název entity"} /> {/*Bude dynamicky */}
      <img src="" alt="" />
      <h2>země:</h2>
      <h2>sport</h2>
    </div>
  );
};

export default Detail;
