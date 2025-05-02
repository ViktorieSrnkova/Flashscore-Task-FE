import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./pages/Home/Results";
import Detail from "./pages/Search/Detail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Results />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
