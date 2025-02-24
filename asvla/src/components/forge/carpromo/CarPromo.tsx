import React, { useState } from "react";

// components
import "./CarPromo.scss";
import DiceGame from "../dice/DiceGame";
import MultipleProgresses from "./carPromo-miniComponents/MultipleProgresses";
import MinorProgress from "./carPromo-miniComponents/MinorProgress";
import CardGame from "../cardGame/CardGame";

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

import bomb from "./carpromo-img/cross.svg";
import TermsComponent from "../terms/TermsComponent";

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

const cardPrizes = [
  { id: 1, icon: cashWinIcon },
  { id: 2, icon: iphoneWinIcon },
  { id: 3, icon: gelWinIcon },
  { id: 4, icon: toyotaActiveIcon },
  { id: 5, icon: dodgeActiveIcon },
  { id: 6, icon: bomb },
];

const CarPromo: React.FC = () => {
  const [activeCount1, setActiveCount1] = useState(0);
  const [activeCount2, setActiveCount2] = useState(0);
  const [minorActiveCounts, setMinorActiveCounts] = useState([0, 0, 0]);
  const [diceNumber, setDiceNumber] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isFlipped, setIsFlipped] = useState(Array(12).fill(false));
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const [remainingFlips, setRemainingFlips] = useState(0);
  const [showCongratsPopup, setShowCongratsPopup] = useState(false);
  const [congratsIcon, setCongratsIcon] = useState<string | null>(null);

  // Function to update prize progress based on flipped card
  const updatePrizeProgress = (cardId: number) => {
    if (cardId === 4) {
      setActiveCount1((prev) => {
        const newCount = prev + 1;
        if (newCount === 10) {
          setCongratsIcon(toyotaActiveIcon);
          setShowCongratsPopup(true);
        }
        return newCount;
      }); // Toyota
    } else if (cardId === 5) {
      setActiveCount2((prev) => {
        const newCount = prev + 1;
        if (newCount === 10) {
          setCongratsIcon(dodgeActiveIcon);
          setShowCongratsPopup(true);
        }
        return newCount;
      }); // Dodge
    } else if (cardId >= 1 && cardId <= 3) {
      setMinorActiveCounts((prev) => {
        const newCounts = [...prev];
        newCounts[cardId - 1] += 1;
        if (newCounts[cardId - 1] === 10) {
          setCongratsIcon(cardPrizes[cardId - 1].icon);
          setShowCongratsPopup(true);
        }
        return newCounts;
      });
    }
  };

  const handleRoll = () => {
    if (remainingFlips > 0) {
      setPopupTitle("Please");
      setPopupMessage("Use all your flips before rolling again");
      setShowPopup(true);
      return;
    }

    setIsRolling(true);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(randomNumber);
      setRotation(getRotation(randomNumber));
      setRemainingFlips(randomNumber);
      setIsRolling(false);
    }, 1000); 
  };

  const getRotation = (number: number) => {
    switch (number) {
      case 1:
        return { x: 0, y: 0 };
      case 2:
        return { x: 0, y: 180 };
      case 3:
        return { x: 0, y: -90 };
      case 4:
        return { x: 0, y: 90 };
      case 5:
        return { x: -90, y: 0 };
      case 6:
        return { x: 90, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const handleCardClick = (index: number) => {
    if (remainingFlips <= 0) {
      setPopupTitle("Don't give up yet!");
      setPopupMessage("Roll the dice again");
      setShowPopup(true);
      return;
    }

    const newFlippedState = [...isFlipped];
    newFlippedState[index] = !newFlippedState[index];
    setIsFlipped(newFlippedState);
    setRemainingFlips(remainingFlips - 1);

    // Get the prize from the flipped card and update progress
    const flippedCard = cardPrizes[index % cardPrizes.length];
    updatePrizeProgress(flippedCard.id);

    if (flippedCard.id === 6) {
      setTimeout(() => {
      setPopupMessage("You found the bomb! Start again?");
      setShowPopup(true);
      }, 500); 
    } else if (remainingFlips - 1 === 0) {
      setTimeout(() => {
      setPopupTitle("Please");
      setPopupMessage("Roll the dice again");
      setShowPopup(true);
      },1000); 
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsFlipped(Array(12).fill(false));
    setRemainingFlips(0);
  };

  const handleCloseCongratsPopup = () => {
    setShowCongratsPopup(false);
    setCongratsIcon(null);
  };

  return (
    <div className="carpromoBody">
      <div className="carpromo__container">
        <h2 className="carpRomoTitle">Roll The Dice and Win</h2>
        <DiceGame
          diceNumber={diceNumber}
          isRolling={isRolling}
          rotation={rotation}
          handleRoll={handleRoll}
        />
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
              setActiveCount={(count) => {
                const newCounts = [...minorActiveCounts];
                newCounts[index] = count;
                setMinorActiveCounts(newCounts);
              }}
            />
          ))}
        </div>
        <CardGame
          cardPrizes={cardPrizes}
          handleCardClick={handleCardClick}
          isFlipped={isFlipped}
        />
        {showPopup && (
          <div className="cardPopup">
            <div className="cardPopup__content">
              <h2>{popupTitle}</h2>
              <p>{popupMessage}</p>
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        )}
        {showCongratsPopup && (
          <div className="cardPopup">
            <div className="cardPopup__content">
              <h2>Congratulations!</h2>
              <p>You have collected all 10x items</p>
              {congratsIcon && <img src={congratsIcon} alt="Collected Icon" />}
              <button onClick={handleCloseCongratsPopup}>Close</button>
            </div>
          </div>
        )}
        <TermsComponent carPromoTerms={true} TermsBg={false} />
      </div>
    </div>
  );
};

export default CarPromo;
