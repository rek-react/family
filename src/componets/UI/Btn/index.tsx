import { FC, ReactNode } from "react";
import "./Btn.scss";
import GradientText from "../GradientText";

const Btn: FC<{
  text: string;
  svg: ReactNode;
}> = ({ text, svg }) => {
  return (
    <a href="#" className="btn">
      <GradientText text={text} />
      <button>{svg}</button>
    </a>
  );
};
export default Btn;
