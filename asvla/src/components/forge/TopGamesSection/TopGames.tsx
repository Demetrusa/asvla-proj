import React from "react";

import "./TopGames.scss";
import TopGamesCard from "./TopGamesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import slotimg1 from "./TopGamesIMg/burning-hot-5-vertic.webp";
import slotimg2 from "./TopGamesIMg/doctor_winstein-vert.webp";
import slotimg3 from "./TopGamesIMg/jester-bags-v.webp";
import slotimg4 from "./TopGamesIMg/gates-of-olympus.webp";
import slotimg5 from "./TopGamesIMg/kingdom-of-atlantis-jackpot-play-v.webp";
import slotimg6 from "./TopGamesIMg/regal-spins-10-vertt.webp";
import slotimg7 from "./TopGamesIMg/amazon's-battlevert.webp";
import slotimg8 from "./TopGamesIMg/40-super-hot-vertic.webp";

import slogImg9 from "./TopGamesIMg/monkey_kingdom-horiz_.webp";
import slogImg10 from "./TopGamesIMg/big-chill.webp";
import slogImg11 from "./TopGamesIMg/the-wild-rhino-horiz_.webp";
import slogImg12 from "./TopGamesIMg/wizard_blizzard_x5horiz_.webp";
import slogImg13 from "./TopGamesIMg/queen_of_flames-horiz.webp";
import slogImg14 from "./TopGamesIMg/fruits_sweets-horiz.webp";

import slogImg15 from "./TopGamesIMg/gates-of-olympusâ-¢.webp";
import slogImg16 from "./TopGamesIMg/doctor_winstein-horiz.webp";
import slogImg17 from "./TopGamesIMg/sugar-duke-h.webp";
import slogImg18 from "./TopGamesIMg/pyramid-riddles-osiris-thumbnail-1680x1080.webp";
import slogImg19 from "./TopGamesIMg/cosmo-classic-h.webp";
import slogImg20 from "./TopGamesIMg/egg-rush-jackpot-play-h.webp";

import slogImg21 from "./TopGamesIMg/tiki-hut-megaways-jackpot-play-h.webp";
import slogImg22 from "./TopGamesIMg/5-lions-megaways-vers-2.webp";
import slogImg23 from "./TopGamesIMg/book-of-realm-jumboways-thumbnail-1680x1080.webp";
import slogImg24 from "./TopGamesIMg/gonzos-quest-megaways-version-1.webp";
import slogImg25 from "./TopGamesIMg/divine-fortune-megaways.webp";
import slogImg26 from "./TopGamesIMg/book-of-realm-jumboways-thumbnail-1680x1080.webp";

import NewGames from "./NewGames";

const topGamesData = [
  { imageSrc: slotimg1, link: "https://example.com/play-game" },
  { imageSrc: slotimg2, link: "https://example.com/play-game" },
  { imageSrc: slotimg3, link: "https://example.com/play-game" },
  { imageSrc: slotimg4, link: "https://example.com/play-game" },
  { imageSrc: slotimg5, link: "https://example.com/play-game" },
  { imageSrc: slotimg6, link: "https://example.com/play-game" },
  { imageSrc: slotimg7, link: "https://example.com/play-game" },
  { imageSrc: slotimg8, link: "https://example.com/play-game" },
];

const NewGamesData = [
  { imageSrc: slogImg9, link: "https://example.com/play-game" },
  { imageSrc: slogImg10, link: "https://example.com/play-game" },
  { imageSrc: slogImg11, link: "https://example.com/play-game" },
  { imageSrc: slogImg12, link: "https://example.com/play-game" },
  { imageSrc: slogImg13, link: "https://example.com/play-game" },
  { imageSrc: slogImg14, link: "https://example.com/play-game" },
];

const BuyGamesData = [
  { imageSrc: slogImg15, link: "https://example.com/play-game" },
  { imageSrc: slogImg16, link: "https://example.com/play-game" },
  { imageSrc: slogImg17, link: "https://example.com/play-game" },
  { imageSrc: slogImg18, link: "https://example.com/play-game" },
  { imageSrc: slogImg19, link: "https://example.com/play-game" },
  { imageSrc: slogImg20, link: "https://example.com/play-game" },
];

const MegaWaysData = [
  { imageSrc: slogImg21, link: "https://example.com/play-game" },
  { imageSrc: slogImg22, link: "https://example.com/play-game" },
  { imageSrc: slogImg23, link: "https://example.com/play-game" },
  { imageSrc: slogImg24, link: "https://example.com/play-game" },
  { imageSrc: slogImg25, link: "https://example.com/play-game" },
  { imageSrc: slogImg26, link: "https://example.com/play-game" },
];
const Ci_interactive = [
  { imageSrc: slogImg10, link: "https://example.com/play-game" },
  { imageSrc: slogImg21, link: "https://example.com/play-game" },
  { imageSrc: slogImg14, link: "https://example.com/play-game" },
  { imageSrc: slogImg23, link: "https://example.com/play-game" },
  { imageSrc: slogImg20, link: "https://example.com/play-game" },
  { imageSrc: slogImg13, link: "https://example.com/play-game" },
];

const TopGames: React.FC = () => {
  return (
    <div className="topGamesSection">
      <div className="topGamesSection__wrap">
        <div className="topGamesSection__wrap-title">
          <span>Top თამაშები</span>
          <a href="#">მეტის ნახვა &gt;</a>
        </div>

        {/* top games Sec */}

        <div className="topGamesSection__wrap-gamesBox">
          <div className="topGamesSection__swiper">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={5}
              slidesPerView={5}
              loop={true}
              navigation={{
                nextEl: ".topGames-swiper-button-next",
                prevEl: ".topGames-swiper-button-prev",
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {topGamesData.map((game, index) => (
                <SwiperSlide key={index}>
                  <TopGamesCard imageSrc={game.imageSrc} link={game.link} />
                </SwiperSlide>
              ))}
              <div className="topGames-swiper-button-next">
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
              <div className="topGames-swiper-button-prev">
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      {/* New games sec */}
      <div className="newgameSBox">
        <div className="newGamesSection__title">
          <span>ახალი თამაშები</span>
          <a href="#">მეტის ნახვა &gt;</a>
        </div>
        <div className="NewGamesSwiper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={5}
            loop={true}
            navigation={{
              nextEl: ".NewGames-swiper-button-next",
              prevEl: ".NewGames-swiper-button-prev",
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {NewGamesData.map((game, index) => (
              <SwiperSlide key={index}>
                <NewGames imageSrc={game.imageSrc} link={game.link} />
              </SwiperSlide>
            ))}
            <div className="NewGames-swiper-button-next">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className="NewGames-swiper-button-prev">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          </Swiper>
        </div>

        {/* buyBonusSection */}

        <div className="newGamesSection__title buyBonusSection__title">
          <span>იყიდე ბონუსი</span>
          <a href="#">მეტის ნახვა &gt;</a>
        </div>
        <div className="buyBonusSection">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={5}
            loop={true}
            navigation={{
              nextEl: ".buyBonus-swiper-button-next",
              prevEl: ".buyBonus-swiper-button-prev",
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {BuyGamesData.map((game, index) => (
              <SwiperSlide key={index}>
                <NewGames imageSrc={game.imageSrc} link={game.link} />
              </SwiperSlide>
            ))}
            <div className="buyBonus-swiper-button-next">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className="buyBonus-swiper-button-prev">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          </Swiper>
        </div>
      </div>

      {/* megaWays */}

      <div className="megawasBox">
        <div className="newGamesSection__title megaWays__title">
          <span>Megaways</span>
          <a href="#">მეტის ნახვა &gt;</a>
        </div>
        <div className="megaWays">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={5}
            loop={true}
            navigation={{
              nextEl: ".megaWays-swiper-button-next",
              prevEl: ".megaWays-swiper-button-prev",
            }}
            // breakpoints={{
            //   1325: {
            //     slidesPerView: 4, // Show 4 slides
            //     spaceBetween: 10,
            //   },
            //   1024: {
            //     slidesPerView: 3, // Show 3 slides
            //     spaceBetween: 15, // Further reduce space
            //   },
            //   768: {
            //     slidesPerView: 2, // Show 2 slides
            //     spaceBetween: 20, // Adjust space for smaller screens
            //   },
            //   480: {
            //     slidesPerView: 1, // Show 1 slide
            //     spaceBetween: 10, // Smaller space on mobile
            //   },
            // }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {MegaWaysData.map((game, index) => (
              <SwiperSlide key={index}>
                <NewGames imageSrc={game.imageSrc} link={game.link} />
              </SwiperSlide>
            ))}
            <div className="megaWays-swiper-button-next">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className="megaWays-swiper-button-prev">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          </Swiper>
        </div>

        <div className="newGamesSection__title  ci_interTitle">
          <span>CT Interactive</span>
          <a href="#">მეტის ნახვა &gt;</a>
        </div>

        <div className="ci_interactive">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={5}
            loop={true}
            navigation={{
              nextEl: ".ci_interactive-button-next",
              prevEl: ".ci_interactive-button-prev",
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {Ci_interactive.map((game, index) => (
              <SwiperSlide key={index}>
                <NewGames imageSrc={game.imageSrc} link={game.link} />
              </SwiperSlide>
            ))}
            <div className="ci_interactive-button-next">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className="ci_interactive-button-prev">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopGames;
