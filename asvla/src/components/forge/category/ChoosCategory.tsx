import React from "react";
import "./Category.scss";
import categoryImg from "./category-img/icn_categories.svg";
import quickDepos from "./category-img/icn_quick_deposit.svg";
import icn_support from "./category-img/icn_support.svg";

const ChoosCategory: React.FC = () => {
  return (
    <div className="chooseCategory">
      <div className="small-menu">
        <div className="small-menu-category">
          <img src={categoryImg} alt="" />
          <span>კატეგორია</span>
        </div>
        <div className="small-menu-addCard">
          <img src={quickDepos} alt="" />
          <span>სწრაფი შევსება</span>
        </div>
        <div className="small-menu-contact">
          <img src={icn_support} alt="" />
          <span>კონტაქტი</span>
        </div>
      </div>
    </div>
  );
};

export default ChoosCategory;
