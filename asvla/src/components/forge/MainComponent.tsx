import React from "react";
import "./MainComponent.scss";
import Promo from "./promo/Promo";
import TopGames from "./TopGamesSection/TopGames";
import Weekgames from "./weekGame/WeekGame";
import Footer from "./footer/Footer";

const MainComponent: React.FC = () => {
  return (
    <div className="main-component">
      <Promo />
      <TopGames />
      <Weekgames />
      <Footer />
    </div>
  );
};

export default MainComponent;
