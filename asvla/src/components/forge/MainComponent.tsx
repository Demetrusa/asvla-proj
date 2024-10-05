import React from "react";
import "./MainComponent.scss";
import PrimarySearchAppBar from "./nav/PrimarySearchAppBar";
import Promo from "./promo/Promo";

const MainComponent: React.FC = () => {
  return (
    <div className="main-component">
      <PrimarySearchAppBar />
      <Promo />
    </div>
  );
};

export default MainComponent;
