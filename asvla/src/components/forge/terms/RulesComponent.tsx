import React, { useState } from "react";

const RulesComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="newTerms newTerms__rules">
      <div
        className="newTerms__head newTerms__rules--head"
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
          <li>
            შეგახსენებთ, რომ ჩვენი საიტის წესების მიხედვით, ერთზე მეტი ანგარიშის
            გახსნა ...
          </li>
          <li>
            შეგახსენებთ, რომ ჩვენი საიტის წესების მიხედვით, ერთზე მეტი ანგარიშის
            გახსნა ...
          </li>
          <li>
            შეგახსენებთ, რომ ჩვენი საიტის წესების მიხედვით, ერთზე მეტი ანგარიშის
            გახსნა ...
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RulesComponent;
