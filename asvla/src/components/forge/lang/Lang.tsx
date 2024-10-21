import React, { useState } from "react";
import "./Lang.scss";
import GeoImg from "./lang-img/ka.svg";
import EngImg from "./lang-img/en.svg";
import RuImg from "./lang-img/ru.svg";

const Lang: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>("");

  const handleLangClick = (lang: string) => {
    setSelectedLang(lang);
  };
  return (
    <div className="lang-Box">
      <div
        className={`img-bg ${selectedLang === "geo" ? "active" : ""}`}
        onClick={() => handleLangClick("geo")}
      >
        <img src={GeoImg} alt="geo" className="lang-ka-img" />
      </div>
      <div
        className={`img-bg ${selectedLang === "en" ? "active" : ""}`}
        onClick={() => handleLangClick("en")}
      >
        <img src={EngImg} alt="en" className="lang-en-img" />
      </div>
      <div
        className={`img-bg ${selectedLang === "ru" ? "active" : ""}`}
        onClick={() => handleLangClick("ru")}
      >
        <img src={RuImg} alt="ru" className="lang-ru-img" />
      </div>
    </div>
  );
};

export default Lang;
