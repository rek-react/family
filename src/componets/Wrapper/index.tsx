import { FC, PropsWithChildren } from "react";
import "./Wrapper.scss";

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};
export default Wrapper;
