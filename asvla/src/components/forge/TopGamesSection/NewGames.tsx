import React from "react";
import "./TopGames.scss";
import { Link } from "react-router-dom";

interface NewGamesCardProps {
  imageSrc: string;
  link: string;
}

const NewGames: React.FC<NewGamesCardProps> = ({ imageSrc, link }) => {
  return (
    <Link to={link} className="newGamesLink">
      <div className="newGamesSection">
        <div className="newGamesSection__inside">
          <img src={imageSrc} alt="" />
          <div className="newGames__title">
            <span>ახალი</span>
          </div>
          <div className="playButton"></div>
        </div>
      </div>
    </Link>
  );
};

export default NewGames;
