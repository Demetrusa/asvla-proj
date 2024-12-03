import "./TermsComponent.scss";
import React from "react";
import HowtoComponent from "./HowtoComponent";
import RulesComponent from "./RulesComponent";

type TermsComponentProps = {
  TermsBg: boolean;
  // headerText: string;
};

const TermsComponent: React.FC<TermsComponentProps> = ({
  TermsBg,
  // headerText,
}) => {
  return (
    <div className="newTerms-container">
      <HowtoComponent TermsBg={TermsBg} />
      <RulesComponent TermsBg={TermsBg} />
    </div>
  );
};

export default TermsComponent;
