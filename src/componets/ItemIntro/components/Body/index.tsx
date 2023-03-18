import { FC, PropsWithChildren } from "react";

const ItemIntroBody: FC<PropsWithChildren> = ({ children }) => {
  return <div className="itemIntro__body">{children}</div>;
};
export default ItemIntroBody;
