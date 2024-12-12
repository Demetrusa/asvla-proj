import React from "react";
import "./Donate.scss";

interface DonateButtonProps {
  onClick: () => void;
}

const DonateButton: React.FC<DonateButtonProps> = ({ onClick }) => {
  return (
    <div className="container__donateBtn">
      <button onClick={onClick}>Donate</button>
    </div>
  );
};

export default DonateButton;
