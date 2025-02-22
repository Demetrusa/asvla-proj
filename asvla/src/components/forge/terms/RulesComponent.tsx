import React, { useState } from "react";

type DropdownStateRules = {
  TermsBg: boolean;
  carPromoTerms: boolean;
};
const RulesComponent: React.FC<DropdownStateRules> = ({
  TermsBg,
  carPromoTerms,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="newTerms newTerms__rules">
      <div
        className={`newTerms__head newTerms__rules--head ${
          TermsBg ? "threePlusOneTerms" : ""
        } ${carPromoTerms ? "carPromoActive" : ""}`}
        onClick={handleToggle}
      >
        <p>ADDITIONAL TERMS AND CONDITIONS </p>
        <div className="newTerms__arrow"></div>
      </div>
      <div
        className={`newTerms__content newTerms__rules--content ${
          isOpen ? "open" : ""
        } ${carPromoTerms ? "carPromoActive" : ""}`}
      >
        <ol>
          <li className={TermsBg ? "li-terms-bg" : "rules-p"}>
            Multi accounting is strictly prohibited according to the rules of
            Adjarabet. In cases where the management of Adjarabet determines, at
            its sole discretion, that a Participant has operated more than one
            account, we may lock accounts and/or disqualify Participants from
            ongoing or future promos without prior notice.
          </li>
          <li className={TermsBg ? "li-terms-bg" : "rules-p"}>
            Adjarabet reserves the right to amend the terms for this promo or
            cancel this promo at any stage notifying all Participants in advance
            by publishing it on the website.
          </li>
          <li className={TermsBg ? "li-terms-bg" : "rules-p"}>
            Malfunction voids the winnings.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RulesComponent;
