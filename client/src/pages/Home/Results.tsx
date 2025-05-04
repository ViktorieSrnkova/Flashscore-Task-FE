import React, { useState } from "react";
import Title from "../../components/Title";
import Repeater from "./Repeater";
import Search from "./Search";
import "./css//Results.css";
import { sortBySportName } from "../../utils/sortData";
import { useNavigate } from "react-router-dom";

interface ResultsProps {
  handleError: (message: string) => void;
  setLoading: (loading: boolean) => void;
  setData: (data: any[]) => void;
  data: any[];
  setErrorMessage: (error: string | null) => void;
}

const Results: React.FC<ResultsProps> = ({
  setLoading,
  setData,
  data,
  setErrorMessage,
}) => {
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();
  const goToCleanHome = () => {
    navigate(`/`);
    window.location.reload();
  };
  return (
    <div className="res-page">
      <Title content={"Results"} onClick={() => goToCleanHome()} />
      <Search
        setLoading={setLoading}
        setData={setData}
        setSearched={setSearched}
        setErrorMessage={setErrorMessage}
      />
      <Repeater data={sortBySportName(data)} searched={searched} />
    </div>
  );
};

export default Results;
