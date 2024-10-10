import React from "react";
import "./TopGames.scss";
import { Link } from "react-router-dom";

const NewGames: React.FC = () => {
  return (
    <div className="newGamesSection">
      <div className="newGamesSection__inside">
        <img src="" alt="" />
        <div className="newGames__title">
          <span>ახალი</span>
          <span>ორმაგი ნაბიჯი</span>
        </div>
        <div className="playButton"></div>
      </div>
    </div>
  );
};

export default NewGames;
