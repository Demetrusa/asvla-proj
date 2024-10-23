import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WeekGame.scss";
import MainImg from "./weekgamesImg/game-of-week-6-desktop.avif";
import MobileImg from "./weekgamesImg/game-of-mob.webp"; // Path to mobile image
import weekofGame__img from "./weekgamesImg/dancing-dead-h.webp";

const Weekgames: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 940);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Link to="#">
      <div className="weekGamesBox">
        <div className="weekGamesBox__animationBG">
          <img src={isMobile ? MobileImg : MainImg} alt="" />
          <div className="game-of-the-week-background absolute aspect-1 w-[120%] opacity-30 "></div>
          <div className="weekofGame">
            <div className="weekofGame__img">
              <img src={weekofGame__img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Weekgames;
