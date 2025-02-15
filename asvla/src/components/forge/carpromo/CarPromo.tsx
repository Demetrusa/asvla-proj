import React, { useState } from "react";

import "./CarPromo.scss";
import DiceGame from "../dice/DiceGame";

const CarPromo: React.FC = () => {
  return (
    <div className="carpromoBody">
      <div className="carpromo__container">
        <p>bla</p>
        <DiceGame />
      </div>
    </div>
  );
};

export default CarPromo;
