import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecondPage from "./SecondPage";
import ExternalPage from "./ExternalPage";
import MainPage from "./MainPage";
import ImageSlider from "./ImageSlider";
import DistanceTracker from "./DistanceTracker/DistanceTracker"

function App() {
  return (
    <DistanceTracker></DistanceTracker> 
  );
}

export default App;
