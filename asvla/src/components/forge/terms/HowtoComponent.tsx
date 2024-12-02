import React, { useState } from "react";

type DropdownState = {
  parent: string | null;
  child: string | null;
  TermsBg: boolean;
};

const HowtoComponent: React.FC<DropdownState> = ({ TermsBg }) => {
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
        className={
          TermsBg ? "threePlusOneTerms" : "newTerms__head newTerms__howto--head"
        }
        onClick={() => toggleContent("parent", "head")}
      >
        <div>აქციის პირობები</div>
        <div className="newTerms__arrow"></div>
      </div>
      <div
        className={`newTerms__content ${
          openDropdown.parent === "head" ? "open" : ""
        } ${TermsBg ? "threePlusOneTerms-2" : "newTerms__howto--content"}`}
      >
        <div className="newTerms__tabs">
          <div
            className={`newTerms__tabs--item newTerms__tabs--one ${
              activeTab === "one" ? "act" : ""
            }`}
            onClick={() => setActiveTab("one")}
          >
            პრომოს შესახებ
          </div>
          <div
            className={`newTerms__tabs--item newTerms__tabs--two ${
              activeTab === "two" ? "act" : ""
            }`}
            onClick={() => setActiveTab("two")}
          >
            პრიზები
          </div>
        </div>
        {activeTab === "one" && (
          <div className="newTerms__contentOne">
            <div className="newTerms">
              <div
                className={TermsBg ? "rame-3" : "newTerms__head"}
                onClick={() => toggleContent("child", "one")}
              >
                <div>დროპდაუნ 1</div>
                <div className="newTerms__arrow"></div>
              </div>
              <div
                className={`newTerms__content ${
                  openDropdown.child === "one" ? "open" : ""
                }`}
              >
                <p>კაი გამარჯობა თქვენი</p>
                <ul>
                  <li>Content for Terms Item 1 goes here.</li>
                </ul>
              </div>
            </div>
            <div className="newTerms">
              <div
                className={TermsBg ? "rame-3" : "newTerms__head"}
                onClick={() => toggleContent("child", "two")}
              >
                <div>დროპდაუნ 2</div>
                <div className="newTerms__arrow"></div>
              </div>
              <div
                className={`newTerms__content ${
                  openDropdown.child === "two" ? "open" : ""
                }`}
              >
                <p>კაი გამარჯობა თქვენი</p>
                <ul>
                  <li>Content for Terms Item 2 goes here.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === "two" && (
          <div className="newTerms__contentTwo">
            <div className="newTerms">
              <div
                className="newTerms__head"
                onClick={() => toggleContent("child", "three")}
              >
                <div>დროპდაუნ 4</div>
                <div className="newTerms__arrow"></div>
              </div>
              <div
                className={`newTerms__content ${
                  openDropdown.child === "three" ? "open" : ""
                }`}
              >
                <p>Content for Terms Item 3 goes here</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowtoComponent;
