import React from "react";
import "./Promo.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import PromoSlide from "../promoSildes/promoSlideOne/PromoSlideOne";

const Promo: React.FC = () => {
  return (
    <div className="promoPage">
      <div className="promoPage__swiper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <PromoSlide />
          </SwiperSlide>
          <SwiperSlide>
            <PromoSlide />
          </SwiperSlide>
          <SwiperSlide>
            <PromoSlide />
          </SwiperSlide>
          <SwiperSlide>
            <PromoSlide />
          </SwiperSlide>
          <SwiperSlide>
            <PromoSlide />
          </SwiperSlide>
          <SwiperSlide>
            <PromoSlide />
          </SwiperSlide>
          <SwiperSlide>
            <PromoSlide />
          </SwiperSlide>
          <SwiperSlide>
            <PromoSlide />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Promo;
