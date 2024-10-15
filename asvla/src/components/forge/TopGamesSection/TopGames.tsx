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
const TopGames: React.FC = () => {
  return (
    <div className="topGamesSection">
      <div className="topGamesSection__wrap">
        <div className="topGamesSection__wrap-title">
          <span>Top თამაშები</span>
          <a href="#">მეტის ნახვა &gt;</a>
        </div>
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
            </Swiper>
            <div className="topGames-swiper-button-next">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className="topGames-swiper-button-prev">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          </div>
        </div>
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
          </Swiper>
          <div className="NewGames-swiper-button-next">
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className="NewGames-swiper-button-prev">
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGames;
