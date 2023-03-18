import { FC, PropsWithChildren } from "react";
import "./Header.scss";

const IntroHeader: FC<PropsWithChildren> = ({ children }) => {
  return <div className="intro__header header-intro">{children}</div>;
};

export default IntroHeader;
