import { FC } from "react";
import clsx from "clsx";
import "./Item.scss";
const InfoItem: FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <div className="info__item item-info">
      <div
        className={clsx("item-info__title title-more", {
          "item-info__title_image": !title,
        })}
      >
        {title}
      </div>
      <div className="item-info__text text">{text}</div>
    </div>
  );
};
export default InfoItem;
