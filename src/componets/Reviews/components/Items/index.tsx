import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Items.scss";
import ReviewsContent from "../Content";

const ReviewsItems = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Swiper
      enabled={!isTablet}
      loop
      slidesPerView="auto"
      className="reviews__items items-reviews"
    >
      <SwiperSlide className="items-reviews__item">
        <ReviewsContent />
      </SwiperSlide>
      <SwiperSlide className="items-reviews__item">
        <ReviewsContent />
      </SwiperSlide>
      <SwiperSlide className="items-reviews__item">
        <ReviewsContent />
      </SwiperSlide>
      <SwiperSlide className="items-reviews__item">
        <ReviewsContent />
      </SwiperSlide>
    </Swiper>
  );
};
export default ReviewsItems;
