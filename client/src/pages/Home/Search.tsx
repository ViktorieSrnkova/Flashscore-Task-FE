import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import "./css//Search.css";
import { fetchSearchResults } from "../../api/__tests__/searchApi";
import TYPE_IDS from "../../data/typeIds";
import { useNavigate } from "react-router-dom";
import { getQueryFromUrl } from "../../utils/urlHelpers";

interface SearchProps {
  setLoading: (loading: boolean) => void;
  setData: (data: any[]) => void;
  setSearched: (searched: boolean) => void;
  setErrorMessage: (error: string | null) => void;
}

const Search: React.FC<SearchProps> = ({
  setLoading,
  setData,
  setSearched,
  setErrorMessage,
}) => {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<string>(TYPE_IDS.all);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.clear();
    }, 3600000);
    setQuery(getQueryFromUrl());
    return () => clearTimeout(timeoutId);
  }, []);

  const handleFetch = async (ids: string) => {
    setLoading(true);
    if (!navigator.onLine) {
      setErrorMessage(
        "You are offline. Please check your internet connection."
      );
      return;
    }
    if (query.trim()) {
      navigate(`?query=${encodeURIComponent(query)}`, { replace: true });
    }
    try {
      const result = await fetchSearchResults(ids, getQueryFromUrl());
      setData(result);
      setSearched(true);
      setActiveType(ids);
    } catch (error: any) {
      setErrorMessage(error.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const drawButton = (typeKey: keyof typeof TYPE_IDS) => {
    const typeId = TYPE_IDS[typeKey];
    return (
      <Button
        content={typeKey.toString()}
        onClick={() => handleFetch(typeId)}
        active={activeType === typeId}
      />
    );
  };

  return (
    <>
      <div className="top-line">
        <input
          type="search"
          id="search"
          placeholder="search ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <Button
          content={"search"}
          onClick={() => handleFetch(TYPE_IDS.all)}
          disabled={!query.trim()}
        />
      </div>
      <div className="bottom-line">
        {drawButton("all")}
        {drawButton("events")}
        {drawButton("teams")}
      </div>
    </>
  );
};

export default Search;
