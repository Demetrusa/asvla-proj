import React, { useState } from "react";
import "./CarPromo.scss";
import DiceGame from "../dice/DiceGame";
import MultipleProgresses from "./carPromo-miniComponents/MultipleProgresses";

import toyotaActiveIcon from "./carpromo-img/prize2-small-icon.svg";
import toyotaInactiveIcon from "./carpromo-img/incative-car-icon-one.svg";
import toyotaBigIcon from "./carpromo-img/prize2-big-icon.png";
import toyotaMainIcon from "./carpromo-img/prize2-title-icon.svg";

import dodgeActiveIcon from "./carpromo-img/prize1-small-icon.svg";
import dodgeInactiveIcon from "./carpromo-img/incative-car-icon-one.svg";
import dodgeBigIcon from "./carpromo-img/prize1-big-icon.png";
import dodgeMainIcon from "./carpromo-img/prize1-title-icon.svg";
import MinorProgress from "./carPromo-miniComponents/MinorProgress";

const majorPrizes = [
  {
    id: 1,
    title: "Toyota Prado",
    iconActive: toyotaActiveIcon,
    iconInactive: toyotaInactiveIcon,
    bigIcon: toyotaBigIcon,
    titleIcon: toyotaMainIcon,
  },
  {
    id: 2,
    title: "Dodge Challenger",
    iconActive: dodgeActiveIcon,
    iconInactive: dodgeInactiveIcon,
    bigIcon: dodgeBigIcon,
    titleIcon: dodgeMainIcon,
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

const CarPromo: React.FC = () => {
  const [activeCount1, setActiveCount1] = useState(2);
  const [activeCount2, setActiveCount2] = useState(4);

  return (
    <div className="carpromoBody">
      <div className="carpromo__container">
        <DiceGame />
      </div>
      <h2>Card Title</h2>
      <div className="multiple__progresses">
        <MultipleProgresses
          prize={majorPrizes[0]}
          activeCount={activeCount1}
          setActiveCount={setActiveCount1}
        />
        <MultipleProgresses
          prize={majorPrizes[1]}
          activeCount={activeCount2}
          setActiveCount={setActiveCount2}
        />
      </div>
      <div className="minorPrize__progressBox">
        {/* {minorPrizes.map((prize) => (
          <MinorPrize key={prize.id} prize={prize} />
        ))} */}
        <MinorProgress />
      </div>
    </div>
  );
};

export default CarPromo;