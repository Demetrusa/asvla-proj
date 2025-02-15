import React, { useState } from "react";
import "./DiceGame.scss";

import diceOne from "./dice-img/dice1.png";
import diceTwo from "./dice-img/dice2.png";
import diceThree from "./dice-img/dice3.png";
import diceFour from "./dice-img/dice4.png";
import diceFive from "./dice-img/dice5.png";
import diceSix from "./dice-img/dice6.png";

const DiceGame: React.FC = () => {
  const [diceNumber, setDiceNumber] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleRoll = () => {
    setIsRolling(true);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(randomNumber);
      setRotation(getRotation(randomNumber));
      setIsRolling(false);
    }, 1000); // Duration of the animation
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

  return (
    <div className="dice-game">
      <div
        className={`cube ${isRolling ? "rolling" : ""}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div id="1" className="front">
          <img src={diceOne} alt="1" />
        </div>
        <div id="2" className="back">
          <img src={diceTwo} alt="2" />
        </div>
        <div id="3" className="right">
          <img src={diceThree} alt="3" />
        </div>
        <div id="4" className="left">
          <img src={diceFour} alt="4" />
        </div>
        <div id="5" className="top">
          <img src={diceFive} alt="5" />
        </div>
        <div id="6" className="bottom">
          <img src={diceSix} alt="6" />
        </div>
      </div>
      <div className="diceGame__button" onClick={handleRoll}>
        ROLL
      </div>
      <div className="diceNumber">{diceNumber !== null ? diceNumber : ""}</div>
    </div>
  );
};

export default DiceGame;
