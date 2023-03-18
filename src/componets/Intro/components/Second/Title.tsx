import { FC, PropsWithChildren } from "react";
const SecondTitle: FC<PropsWithChildren> = ({ children }) => (
  <div className="second-intro__title title-less">{children}</div>
);

export default SecondTitle;
