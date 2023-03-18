import "./Header.scss";
import { useAppSelector } from "../../hooks/redux";
import Logo from "../UI/Logo";
import clsx from "clsx";
import HeaderFeedback from "./components/Feedback";
import HeaderNav from "./components/Nav";
import HeaderBurger from "./components/Burger";
import { useMediaQuery } from "react-responsive";
import HeaderCity from "./components/City";

const Header = () => {
  const { menuActive } = useAppSelector((state) => state.menu);
  const isBurger = useMediaQuery({
    query: "(max-width: 1600px)",
  });
  return (
    <header
      className={clsx("header", {
        ["active-burger"]: menuActive,
      })}
    >
      <div className="header__wrapper ">
        <div className="header__logo">
          <Logo text="Family" />
        </div>
        <div className="header__container container-less ">
          <HeaderCity />
          <HeaderFeedback />
        </div>
        <HeaderNav />
        {isBurger && <HeaderBurger />}
      </div>
    </header>
  );
};
export default Header;
