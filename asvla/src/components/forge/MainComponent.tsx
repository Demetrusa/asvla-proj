import React from "react";
import "./MainComponent.scss";
import Promo from "./promo/Promo";
import TopGames from "./TopGamesSection/TopGames";
import Weekgames from "./weekGame/WeekGame";

const MainComponent: React.FC = () => {
  return (
    <div className="main-component">
      {/* <PrimarySearchAppBar /> */}
      <Promo />
      <TopGames />
      <Weekgames />
      {/* You can add content here if you want it on the homepage */}
    </div>
  );
};

export default MainComponent;
