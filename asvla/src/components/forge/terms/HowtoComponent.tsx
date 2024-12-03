import React, { useState } from "react";

type DropdownState = {
  parent: string | null;
  child: string | null;
  TermsBg: boolean;
  // headerText: string;
  championBG: boolean;
};

const HowtoComponent: React.FC<DropdownState> = ({ TermsBg, championBG }) => {
  const [activeTab, setActiveTab] = useState<"one" | "two">("one");
  const [openDropdown, setOpenDropdown] = useState({
    parent: null,
    child: null,
  });

  const toggleContent = (level: "parent" | "child", dropdown: string) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [level]: prevState[level] === dropdown ? null : dropdown,
    }));
  };

  return (
    <div className="newTerms newTerms__howto">
      <div
        className={`newTerms__head ${TermsBg ? "threePlusOneTerms" : ""} ${
          championBG ? "championBGClass" : "newTerms__howto--head"
        }`}
        onClick={() => toggleContent("parent", "head")}
      >
        <div>Terms and Conditions</div>
        <div className="newTerms__arrow"></div>
      </div>
      <div
        className={`newTerms__content ${
          openDropdown.parent === "head" ? "open" : ""
        } ${
          TermsBg
            ? "threePlusOneTerms-2"
            : championBG
            ? "championBGContentClass"
            : "newTerms__howto--content"
        }`}
      >
        <div className="newTerms__tabs">
          <div
            className={`newTerms__tabs--item newTerms__tabs--one ${
              activeTab === "one" ? "act" : ""
            }`}
            onClick={() => setActiveTab("one")}
          >
            Promotion rules
          </div>
          <div
            className={`newTerms__tabs--item newTerms__tabs--two ${
              activeTab === "two" ? "act" : ""
            }`}
            onClick={() => setActiveTab("two")}
          >
            Prizes
          </div>
        </div>
        {activeTab === "one" && (
          <div className="newTerms__contentOne">
            <div className="newTerms">
              <div
                className={`${
                  TermsBg
                    ? "threePlusOneTerms"
                    : championBG
                    ? "championBGClass"
                    : "newTerms__head"
                }`}
                onClick={() => toggleContent("child", "one")}
              >
                <div>HOW TO PARTICIPATE? </div>
                <div className="newTerms__arrow"></div>
              </div>
              <div
                className={`newTerms__content ${
                  openDropdown.child === "one" ? "open" : ""
                }`}
              >
                <p>
                  To participate in the promotion, the participant should visit
                  the promotion page, register or log in and Opt-in.
                </p>
                <ul>
                  <li>
                    Only bets placed after verification and opt-in will be
                    considered in the framework of the promotion.
                  </li>
                </ul>
              </div>
            </div>
            <div className="newTerms">
              <div
                className={`${
                  TermsBg
                    ? "threePlusOneTerms"
                    : championBG
                    ? "championBGClass"
                    : "newTerms__head"
                }`}
                onClick={() => toggleContent("child", "one")}
              >
                <div>WHAT ARE THE DATES THE PROMOTION? </div>
                <div className="newTerms__arrow"></div>
              </div>
              <div
                className={`newTerms__content ${
                  openDropdown.child === "two" ? "open" : ""
                }`}
              >
                <p></p>
                <ul>
                  <li>
                    The promotion launches on June 14, 2024 at 00:00:00 and
                    concludes on December 31, at 23:59:59
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === "two" && (
          <div className="newTerms__contentTwo">
            <div className="newTerms">
              <div
                className={TermsBg ? "threePlusOneTerms" : "newTerms__head"}
                onClick={() => toggleContent("child", "three")}
              >
                <div>WHEN DO I RECEIVE THE PRIZE? </div>
                <div className="newTerms__arrow"></div>
              </div>
              <div
                className={`newTerms__content ${
                  openDropdown.child === "three" ? "open" : ""
                }`}
              >
                <p>
                  The prizes will be awarded within 24 hours after all 3
                  eligible express bets are settled.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowtoComponent;
