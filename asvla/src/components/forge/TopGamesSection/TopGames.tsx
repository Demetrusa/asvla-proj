import React from "react";

import "./TopGames.scss";
import TopGamesCard from "./TopGamesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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
              navigation={{
                nextEl: ".TopGames-button-next",
                prevEl: ".TopGames-button-prev",
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <TopGamesCard />
              </SwiperSlide>
              <SwiperSlide>
                <TopGamesCard />
              </SwiperSlide>
              <SwiperSlide>
                <TopGamesCard />
              </SwiperSlide>
              <SwiperSlide>
                <TopGamesCard />
              </SwiperSlide>
              <SwiperSlide>
                <TopGamesCard />
              </SwiperSlide>
              <SwiperSlide>
                <TopGamesCard />
              </SwiperSlide>
              <SwiperSlide>
                <TopGamesCard />
              </SwiperSlide>
              <SwiperSlide>
                <TopGamesCard />
              </SwiperSlide>
            </Swiper>
            <div className="TopGames-button-next"></div>
            <div className="TopGames-button-prev"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGames;
