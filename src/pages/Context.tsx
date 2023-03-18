import React from "react";
import Feedback from "../componets/Feedback";
import Info from "../componets/Info";
import Intro from "../componets/Intro";
import Portfolio from "../componets/Portfolio";
import Price from "../componets/Price";

const PageContext = () => {
  return (
    <>
      <Intro page="context" />
      <Info />
      <Portfolio />
      <Feedback
        title="Остались вопросы?"
        text="Запоните форму, свяжемся с вами для более
детального изучения проекта и подготовки
коммерческого предложения"
      />
      <Price />
    </>
  );
};
export default PageContext;
