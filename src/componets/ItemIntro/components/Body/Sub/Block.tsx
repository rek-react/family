import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

const ItemIntroSubBlock: FC<
  PropsWithChildren<{
    lightItem?: boolean;
  }>
> = ({ children, lightItem }) => {
  return (
    <div
      className={clsx("itemIntro-sub__block", {
        "itemIntro-sub__block-light": lightItem,
      })}
    >
      {children}
    </div>
  );
};
export default ItemIntroSubBlock;
