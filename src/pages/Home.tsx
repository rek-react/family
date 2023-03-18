import React from "react";
import Intro from "../componets/Intro";
import Feedback from "../componets/Feedback";
import Case from "../componets/Case";
import About from "../componets/About";
import Strategy from "../componets/Strategy";
import Reviews from "../componets/Reviews";
import GradientText from "../componets/UI/GradientText";
import ReviewsContent from "../componets/Reviews/components/Content";
import Portfolio from "../componets/Portfolio";
const PageHome = () => {
  return (
    <>
      <Intro page="home" />
      <Case />
      <Feedback
        title="Нужны заявки?"
        text="Запоните форму, свяжемся с вами для более детального изучения проекта и подготовки коммерческого предложения"
      />

      <About percent={50} />
      <Strategy />
      <Feedback
        title="Нужны заявки?"
        text="Запоните форму, свяжемся с вами для более детального изучения проекта и подготовки коммерческого предложения"
      />
      <Portfolio />
      <Reviews>
        <div className="reviews__body">
          <div className="reviews__title title-middle">
            Отзывы —
            <GradientText text="показатель репутации" />
          </div>
          <div className="reviews__content">
            <ReviewsContent />
          </div>
        </div>
      </Reviews>
    </>
  );
};
export default PageHome;
