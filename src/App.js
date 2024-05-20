import React from "react";
import LandingPage from "./Components/LandingPage";
import EventMainPage from "./Components/EventLandingPage/EventMainPage";
import EventInfoStrip from "./Components/EventLandingPage/EventInfoStrip";
import ExploreEventPage from "./Components/EventLandingPage/ExploreEventPage";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

const App = () => {
  return (
    <>
      {/* <LandingPage /> */}
      {/* <EventMainPage /> */}
      <div className="twoPage">
      <EventInfoStrip />
      <ExploreEventPage />
      </div>
     
    </>
  );
};

export default App;
