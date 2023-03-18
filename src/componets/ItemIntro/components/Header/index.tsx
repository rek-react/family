import { FC } from "react";
import "./Header.scss";

const HeaderItemIntro: FC<{
  title: string;
  text: string;
}> = ({ title, text }) => {
  return (
    <div className="itemIntro__header header-itemIntro">
      <div className="header-itemIntro__title title-less">{title}</div>
      <div className="header-itemIntro__text">{text}</div>
    </div>
  );
};
export default HeaderItemIntro;
