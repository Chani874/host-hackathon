import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecondPage from "./SecondPage";
import ExternalPage from "./ExternalPage";
import MainPage from "./MainPage";
import ImageSlider from "./ImageSlider";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/second" element={<SecondPage />} />
        <Route path="/external" element={<ExternalPage />} />
        <Route path="/" element={<MainPage />} /> {/* מסלול ראשי */}
        <Route path="/images" element={<ImageSlider />} /> {/* קומפוננטה חדשה */}
      </Routes>
    </Router>
  );
}

export default App;
