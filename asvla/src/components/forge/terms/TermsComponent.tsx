import "./TermsComponent.scss";
import React from "react";
import HowtoComponent from "./HowtoComponent";
import RulesComponent from "./RulesComponent";

type TermsComponentProps = {
  TermsBg: boolean;
  // headerText: string;
  carPromoTerms: boolean;
};

const TermsComponent: React.FC<TermsComponentProps> = ({
  TermsBg,
  carPromoTerms,
  // headerText,
}) => {
  return (
    <div className="newTerms-container">
      <HowtoComponent
        TermsBg={TermsBg}
        carPromoTerms={carPromoTerms}
        parent={null}
        child={null}
        championBG={false}
      />
      <RulesComponent TermsBg={TermsBg} carPromoTerms={carPromoTerms} />
    </div>
  );
};

export default TermsComponent;
