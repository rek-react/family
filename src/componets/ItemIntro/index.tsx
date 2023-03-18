import { FC, PropsWithChildren } from "react";
import "./ItemIntro.scss";
export { default as imageAuto } from "./images/case_auto.jpg";
export { default as imageWintal } from "./images/case_wintal.jpg";
export { default as imageCoffee } from "./images/case_coffee.jpg";

const ItemIntro: FC<PropsWithChildren> = ({ children }) => {
  return <div className="itemIntro">{children}</div>;
};
export default ItemIntro;
