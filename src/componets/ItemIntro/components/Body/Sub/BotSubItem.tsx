import { FC, PropsWithChildren } from "react";

const ItemIntroSubBotItem: FC<
  PropsWithChildren<{
    subTitle: string;
    title: string;
  }>
> = ({ subTitle, title }) => {
  return (
    <div className="bot-itemIntro-sub__item">
      <div className="bot-itemIntro-sub__sub-title">{subTitle}</div>
      <div className="bot-itemIntro-sub__title">{title}</div>
    </div>
  );
};
export default ItemIntroSubBotItem;
