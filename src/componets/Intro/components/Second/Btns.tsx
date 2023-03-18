import { FC, PropsWithChildren } from "react";

const SecondBtns: FC<PropsWithChildren> = ({ children }) => {
  return <div className="second-intro__btns">{children}</div>;
};
export default SecondBtns;
