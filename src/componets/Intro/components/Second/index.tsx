import { FC, PropsWithChildren } from "react";
import "./Second.scss";

const IntroSecond: FC<PropsWithChildren> = ({ children }) => {
  return <div className="intro__second second-intro">{children}</div>;
};
export default IntroSecond;
