import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./pages/Home/Results";
import Detail from "./pages/Search/Detail";
import "./App.css";
import Loader from "./pages/Home/Loader";
import Alert from "./components/Alert";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(true);
  const doNothing = () => {
    console.log("Did nothing");
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Results />
              {loading && <Loader />}
              {alert && <Alert message={"Nastala chyba"} onClick={doNothing} />}
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
