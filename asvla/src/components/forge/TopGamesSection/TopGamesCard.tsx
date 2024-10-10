import React from "react";
import "./TopGames.scss";
// import slotimg1 from "./TopGamesIMg/40-super-hot-vertic.webp";
import { Link } from "react-router-dom";



interface TopGamesCardProps {
  imageSrc: string;
  link: string;
}

const TopGamesCard: React.FC<TopGamesCardProps> = ({imageSrc, link}) => {
  return (
    <Link to={link} className="card-link">
    <div className="card">
      <div className="card__inside">
        <img src={imageSrc} alt="" />
        <span className="hiddenTitle">
         Play Now
        </span>
        <div className="playButton">
        </div>
      </div>
    </div>
    </Link>
  );
};

export default TopGamesCard;
