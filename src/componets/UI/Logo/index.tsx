import { FC } from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
import { useAppSelector } from "../../../hooks/redux";
import clsx from "clsx";
const Logo: FC<{
  text?: string;
}> = ({ text }) => {
  const { menuActive } = useAppSelector((state) => state.menu);
  return (
    <Link
      to="/"
      className={clsx("logo", {
        menuActive,
      })}
    >
      <div className="logo__image"></div>
      {text && <div className="logo__text">{text}</div>}
    </Link>
  );
};
export default Logo;
