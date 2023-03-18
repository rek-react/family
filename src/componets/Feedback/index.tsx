import { FC } from "react";
import "./Feedback.scss";
import FeedbackForm from "./components/Form";
import elephantBg from "./images/elephant_bg.png";
const Feedback: FC<{
  title: string;
  text: string;
}> = ({ text, title }) => {
  return (
    <div className="page__feedback feedback">
      <div className="feedback__container container-more">
        <div className="feedback__wrapper">
          <div className="feedback__header header-feedback">
            <div className="header-feedback__title title-white title-more">
              {title}
            </div>
            <div className="header-feedback__text">{text}</div>
          </div>
          <FeedbackForm />
        </div>
      </div>
      <div className="feedback__image">
        <img src={elephantBg} alt="" />
      </div>
    </div>
  );
};
export default Feedback;
