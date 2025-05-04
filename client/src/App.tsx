import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./pages/Home/Results";
import Detail from "./pages/Details/Detail";
import "./App.css";
import Loader from "./pages/Home/Loader";
import Alert from "./components/Alert";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleError = (message: string) => {
    setErrorMessage(message);
  };

  const handleReload = () => {
    setErrorMessage(null);
    setData([]);
    setLoading(false);
  };

  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      setErrorMessage(`Error: ${event.message}`);
    };
    const handleOfflineError = () => {
      setErrorMessage("You are offline. Check your internet connection.");
    };
    window.addEventListener("error", handleGlobalError);
    window.addEventListener("offline", handleOfflineError);

    return () => {
      window.removeEventListener("error", handleGlobalError);
      window.removeEventListener("offline", handleOfflineError);
    };
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      {errorMessage && <Alert message={errorMessage} onClick={handleReload} />}
      <Routes>
        <Route
          path="/"
          element={
            <Results
              handleError={handleError}
              setLoading={setLoading}
              setData={setData}
              data={data}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail data={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
