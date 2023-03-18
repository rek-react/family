import { FC, PropsWithChildren } from "react";
import "./BotSub.scss";

const ItemIntroSubBot: FC<PropsWithChildren> = ({ children }) => {
  return <div className="itemIntro-sub__bot bot-itemIntro-sub">{children}</div>;
};
export default ItemIntroSubBot;
