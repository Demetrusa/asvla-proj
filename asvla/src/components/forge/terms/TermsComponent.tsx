import "./TermsComponent.scss";
import React from "react";
import HowtoComponent from "./HowtoComponent";
import RulesComponent from "./RulesComponent";

type TermsComponentState = {
  TermsBg: boolean;
};
const TermsComponent: React.FC<TermsComponentState> = ({ TermsBg }) => {
  return (
    <div className="newTerms-container">
      <HowtoComponent TermsBg />
      <RulesComponent TermsBg />
    </div>
  );
};

export default TermsComponent;
