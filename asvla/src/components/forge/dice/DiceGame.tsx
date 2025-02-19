import React from "react";
import "./DiceGame.scss";

import diceOne from "./dice-img/dice1.png";
import diceTwo from "./dice-img/dice2.png";
import diceThree from "./dice-img/dice3.png";
import diceFour from "./dice-img/dice4.png";
import diceFive from "./dice-img/dice5.png";
import diceSix from "./dice-img/dice6.png";

interface DiceGameProps {
  diceNumber: number | null;
  isRolling: boolean;
  rotation: { x: number; y: number };
  handleRoll: () => void;
}

const DiceGame: React.FC<DiceGameProps> = ({
  diceNumber,
  isRolling,
  rotation,
  handleRoll,
}) => {
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
