import React from "react";
import "./MainComponent.scss";
import PrimarySearchAppBar from "./nav/PrimarySearchAppBar";
import Promo from "./promo/Promo";
import TopGames from "./TopGamesSection/TopGames";

const MainComponent: React.FC = () => {
  return (
    <div className="main-component">
      <PrimarySearchAppBar />
      <Promo />
      <TopGames />
    </div>
  );
};

export default MainComponent;
