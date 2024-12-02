import React, { useState } from "react";

type DropdownStateRules = {
  TermsBg: boolean;
};
const RulesComponent: React.FC<DropdownStateRules> = ({ TermsBg }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="newTerms newTerms__rules">
      <div
        className={
          TermsBg
            ? "threePlusOneTerms "
            : "newTerms__head newTerms__rules--head"
        }
        onClick={handleToggle}
      >
        <p>დამატებითი წესები</p>
        <div className="newTerms__arrow"></div>
      </div>
      <div
        className={`newTerms__content newTerms__rules--content ${
          isOpen ? "open" : ""
        }`}
      >
        <ol>
          <li className={TermsBg ? "li-terms-bg" : "rules-p"}>
            შეგახსენებთ, რომ ჩვენი საიტის წესების მიხედვით, ერთზე მეტი ანგარიშის
            გახსნა ...
          </li>
          <li className={TermsBg ? "li-terms-bg" : "rules-p"}>
            შეგახსენებთ, რომ ჩვენი საიტის წესების მიხედვით, ერთზე მეტი ანგარიშის
            გახსნა ...
          </li>
          <li className={TermsBg ? "li-terms-bg" : "rules-p"}>
            შეგახსენებთ, რომ ჩვენი საიტის წესების მიხედვით, ერთზე მეტი ანგარიშის
            გახსნა ...
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RulesComponent;
