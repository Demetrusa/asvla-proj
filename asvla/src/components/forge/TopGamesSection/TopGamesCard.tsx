import React from "react";
import "./TopGames.scss";
import slotimg1 from "./TopGamesIMg/40-super-hot-vertic.webp";

const TopGamesCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card__inside">
        <img src={slotimg1} alt="" />
        <span className="hiddenTitle"></span>
        <div className="playButton"></div>
      </div>
    </div>
  );
};

export default TopGamesCard;
