import "./Info.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import InfoItem from "./components/Item";

const breakpoints = {
  1600: {
    spaceBetween: 290,
  },
  1024: {
    spaceBetween: 100,
  },
  768: {
    spaceBetween: 80,
  },
  525: {
    loop: false,
    spaceBetween: 40,
  },
  320: {
    loop: true,
    loopedSlides: 2,
  },
};

const Info = () => {
  return (
    <div className="page__info info">
      <div className="info__container container-less">
        <Swiper
          className="info__items"
          slidesPerView="auto"
          spaceBetween={40}
          breakpoints={breakpoints}
        >
          <SwiperSlide>
            <InfoItem title="" text="Официальный партнёр Яндекс.Директ" />
          </SwiperSlide>
          <SwiperSlide>
            <InfoItem title="0 ₽" text="Бесплатный аудит и рекомендации" />
          </SwiperSlide>
          <SwiperSlide>
            <InfoItem title="13 лет" text="Опыт с 2008 года" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Info;
