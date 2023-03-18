import { FC, PropsWithChildren } from "react";
const IntroHeaderSubTitle: FC<PropsWithChildren> = ({ children }) => (
  <div className="header-intro__sub-title title-less">{children}</div>
);
export default IntroHeaderSubTitle;
