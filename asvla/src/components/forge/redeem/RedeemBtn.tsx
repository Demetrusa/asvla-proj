import React from "react";
import "./Redeem.scss";

interface RedeemBtnProps {
  onClick: () => void;
}

const RedeemBtn: React.FC<RedeemBtnProps> = ({ onClick }) => {
  return (
    <div className="container__redeemBtn">
      <button onClick={onClick}>Redeem</button>
    </div>
  );
};

export default RedeemBtn;
