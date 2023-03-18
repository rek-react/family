import { FC } from "react";

const ItemIntroSubList: FC<{
  application?: string;
  price?: string;
  was?: string;
  became?: string;
  label: string;
}> = ({ application, price, was, became, label }) => {
  return (
    <>
      <div className="itemIntro-sub__label">{label}</div>
      <ul className="itemIntro-sub__list">
        {application && (
          <li className="itemIntro-sub__item">
            заявки
            <span className="title-less">{application}</span>
          </li>
        )}
        {price && (
          <li className="itemIntro-sub__item">
            по
            <span className="title-less">{price} ₽</span>
          </li>
        )}
        {was && (
          <li className="itemIntro-sub__item itemIntro-sub__item_gray">
            Было
            <span className="title-less">{was}</span>
          </li>
        )}
        {became && (
          <li className="itemIntro-sub__item gradient-text">
            Стало
            <span className="title-less">{became}</span>
          </li>
        )}
      </ul>
    </>
  );
};
export default ItemIntroSubList;
