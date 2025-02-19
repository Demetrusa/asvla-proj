import React, { useState } from "react";
import "./CarPromo.scss";
import DiceGame from "../dice/DiceGame";
import MultipleProgresses from "./carPromo-miniComponents/MultipleProgresses";
import MinorProgress from "./carPromo-miniComponents/MinorProgress";

// major prize icons
import toyotaActiveIcon from "./carpromo-img/prize2-small-icon.svg";
import toyotaInactiveIcon from "./carpromo-img/incative-car-icon-one.svg";
import toyotaBigIcon from "./carpromo-img/prize2-big-icon.png";
import toyotaMainIcon from "./carpromo-img/prize2-title-icon.svg";

import dodgeActiveIcon from "./carpromo-img/prize1-small-icon.svg";
import dodgeInactiveIcon from "./carpromo-img/incative-car-icon-one.svg";
import dodgeBigIcon from "./carpromo-img/prize1-big-icon.png";
import dodgeMainIcon from "./carpromo-img/prize1-title-icon.svg";

// minor prize icons
import cashIcon from "./carpromo-img/10k.png";
import cashWinIcon from "./carpromo-img/case-10.png";
import iphoneIcon from "./carpromo-img/Screenshot_3.png";
import iphoneWinIcon from "./carpromo-img/apple.svg";
import gelIcon from "./carpromo-img/1k.png";
import gelWinIcon from "./carpromo-img/case-1.png";

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
    icon: cashIcon,
    winIcon: cashWinIcon,
  },
  {
    id: 2,
    title: "iPhone",
    icon: iphoneIcon,
    winIcon: iphoneWinIcon,
  },
  {
    id: 3,
    title: "1K GEL",
    icon: gelIcon,
    winIcon: gelWinIcon,
  },
];

const CarPromo: React.FC = () => {
  const [activeCount1, setActiveCount1] = useState(3);
  const [activeCount2, setActiveCount2] = useState(7);
  const [minorActiveCounts, setMinorActiveCounts] = useState([1, 3, 5]);

  const setMinorActiveCount = (index: number, count: number) => {
    setMinorActiveCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = count;
      return newCounts;
    });
  };

  return (
    <div className="carpromoBody">
      <div className="carpromo__container">
        <DiceGame />
        <h2 className="carpRomoTitle">
          Collect symbols and win relevant prizes
        </h2>
        <div className="multiple__progresses">
          {majorPrizes.map((prize, index) => (
            <MultipleProgresses
              key={index}
              prize={prize}
              activeCount={index === 0 ? activeCount1 : activeCount2}
              setActiveCount={index === 0 ? setActiveCount1 : setActiveCount2}
            />
          ))}
        </div>
        <div className="minorPrize__progressBox">
          {minorPrizes.map((prize, index) => (
            <MinorProgress
              key={index}
              icon={prize.icon}
              winIcon={prize.winIcon}
              activeCount={minorActiveCounts[index]}
              setActiveCount={(count) => setMinorActiveCount(index, count)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarPromo;
