import React from "react";
import Lang from "../lang/Lang";
import "./Footer.scss";
import { Link } from "react-router-dom";

import bogImg from "./footer-img/bog.svg";
import libertyIMg from "./footer-img/liberty.svg";
import tbcImg from "./footer-img/visa.svg";
import visaImg from "./footer-img/tbc.svg";

const bankImages = [
  { src: bogImg, alt: "BOG", link: "https://bankofgeorgia.ge/ka/retail" },
  {
    src: libertyIMg,
    alt: "Liberty",
    link: "https://libertybank.ge/en/",
  },
  { src: tbcImg, alt: "TBC", link: "https://beta.tbcbank.ge/" },
  { src: visaImg, alt: "Visa", link: "https://www.visa.com.ge/en_GE" },
];

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Lang />
      <div className="footer__line"></div>
      <div className="footer__BankImg">
        {bankImages.map((image, index) => (
          <Link key={index} to={image.link} target="_blank">
            <img src={image.src} alt={image.alt} />
          </Link>
        ))}
      </div>
      <div className="footer__line"></div>
      <div className="footer__rules_review">
        <div className="footer__rules_review-box">
          <span>25+</span>
          <span>Permission#: 19-06/278, 05/05/2026</span>
        </div>
        <div className="footer__rules_review-box-two">
          <span>
            შემოსავლების სამსახურის მოთხოვნების მიხედვით, მომსახურების პირობები
            ეს საიტი დაცულია reCAPTCHA და Google-ის მიერ. მოქმედებს -
            <Link to={"https://www.visa.com.ge/en_GE"}>
              კონფიდენციალურობის პოლიტიკა
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
