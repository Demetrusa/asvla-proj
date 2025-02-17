import React from "react";
import "./CarPromo.scss";
import DiceGame from "../dice/DiceGame";

import prize2SmallIcon from "./carpromo-img/prize2-small-icon.svg";
import inactiveCarIconOne from "./carpromo-img/incative-car-icon-one.svg";
import prize2BigIcon from "./carpromo-img/prize2-big-icon.png";
import prize2TitleIcon from "./carpromo-img/prize2-title-icon.svg";

const majorPrizes = [
  {
    id: 1,
    title: "Toyota Prado",
    iconActive: prize2SmallIcon,
    iconInactive: inactiveCarIconOne,
    bigIcon: prize2BigIcon,
    titleIcon: prize2TitleIcon,
  },
  {
    id: 2,
    title: "Dodge Challenger",
    iconActive: "carpromo-img/prize1-small-icon.svg",
    iconInactive: "carpromo-img/prize1-small-icon-inactive.svg",
    bigIcon: "carpromo-img/prize1-big-icon.png",
    titleIcon: "carpromo-img/prize1-title-icon.svg",
  },
];

const minorPrizes = [
  {
    id: 1,
    title: "10K Cash",
    icon: "carpromo-img/10k.png",
    winIcon: "carpromo-img/case-10.png",
  },
  {
    id: 2,
    title: "iPhone",
    icon: "carpromo-img/Screenshot_3.png",
    winIcon: "carpromo-img/apple.svg",
  },
  {
    id: 3,
    title: "1K GEL",
    icon: "carpromo-img/1k.png",
    winIcon: "carpromo-img/case-1.png",
  },
];

const ProgressPrize: React.FC<{ prize: (typeof majorPrizes)[0] }> = ({
  prize,
}) => (
  <div className="progresses-prize">
    <div className="prize-title">
      <div
        className="prize-img"
        style={{ backgroundImage: `url(${prize.titleIcon})` }}
      ></div>
      <span>{prize.title}</span>
    </div>
    <div className="car-progress">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="carIcon"
          style={{
            backgroundImage: `url(${
              i < 2 ? prize.iconActive : prize.iconInactive
            })`,
          }}
        ></div>
      ))}
    </div>
    <div
      className="bigCar-icon"
      style={{ backgroundImage: `url(${prize.bigIcon})` }}
    ></div>
  </div>
);

const MinorPrize: React.FC<{ prize: (typeof minorPrizes)[0] }> = ({
  prize,
}) => (
  <div className="minorPrize">
    <div className="minorPrize-title">
      <div
        className="minorPrize-icon"
        style={{ backgroundImage: `url(${prize.icon})` }}
      ></div>
      <div
        className="minorPrize-winIcon"
        style={{ backgroundImage: `url(${prize.winIcon})` }}
      ></div>
      <div className="minorPrize-Amount">
        <span>0</span>
        <span>/</span>
        <span>10</span>
      </div>
    </div>
    <div className="minorPrizePoints">
      {[...Array(10)].map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  </div>
);

const CarPromo: React.FC = () => {
  return (
    <div className="carpromoBody">
      <div className="carpromo__container">
        <DiceGame />
      </div>
      <h2>Card Title</h2>
      <div className="multiple__progresses">
        {majorPrizes.map((prize) => (
          <ProgressPrize key={prize.id} prize={prize} />
        ))}
      </div>
      <div className="minorPrize__progressBox">
        {minorPrizes.map((prize) => (
          <MinorPrize key={prize.id} prize={prize} />
        ))}
      </div>
    </div>
  );
};

export default CarPromo;
