import { FC, PropsWithChildren } from "react";
const IntroHeaderTitle: FC<PropsWithChildren> = ({ children }) => (
  <div className="header-intro__title title-more">{children}</div>
);

export default IntroHeaderTitle;
