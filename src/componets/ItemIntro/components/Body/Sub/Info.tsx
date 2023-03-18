import { FC } from "react";
import GradientText from "../../../../UI/GradientText";
import "./Info.scss";
const ItemIntroSubInfo: FC<{
  title: string;
  text: string;
  gradient?: boolean;
}> = ({ title, text, gradient }) => {
  return (
    <div className="itemIntro-sub__info info-itemIntro-sub">
      <div className="info-itemIntro-sub__title title-less">
        {gradient ? <GradientText text={title} /> : title}
      </div>
      <div className="info-itemIntro-sub__text">
        {gradient ? <GradientText text={text} /> : text}
      </div>
    </div>
  );
};
export default ItemIntroSubInfo;
