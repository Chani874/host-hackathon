import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecondPage from "./SecondPage";
import ExternalPage from "./ExternalPage";
import MainPage from "./MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/images" element={<SecondPage />} />
        <Route path="/external" element={<ExternalPage />} />
        <Route path="/" element={<MainPage />} /> {/* מסלול ראשי */}
      </Routes>
    </Router>
  );
}

export default App;
