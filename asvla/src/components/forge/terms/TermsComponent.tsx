import "./TermsComponent.scss";
import React from "react";
import HowtoComponent from "./HowtoComponent";
import RulesComponent from "./RulesComponent";

const TermsComponent: React.FC = () => {
  return (
    <div className="newTerms-container">
      <HowtoComponent />
      <RulesComponent />
    </div>
  );
};

export default TermsComponent;
