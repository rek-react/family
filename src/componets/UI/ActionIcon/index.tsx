import { FC, ReactNode } from "react";
import "./ActionIcon.scss";
import clsx from "clsx";

const ActionIcon: FC<{
  svg: ReactNode;
  buttonClassName?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ svg, buttonClassName, handleClick }) => {
  return (
    <i
      onClick={handleClick}
      className={clsx("action-icon", {
        [buttonClassName!]: buttonClassName,
      })}
    >
      {svg}
    </i>
  );
};
export default ActionIcon;
