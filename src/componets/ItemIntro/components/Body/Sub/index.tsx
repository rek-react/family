import { FC, PropsWithChildren } from "react";
import "./Sub.scss";

const ItemIntroSub: FC<PropsWithChildren> = ({ children }) => {
  return <div className="itemIntro__item itemIntro-sub">{children}</div>;
};
export default ItemIntroSub;
