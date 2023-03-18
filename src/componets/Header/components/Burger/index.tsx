import "./Burger.scss";
import utilsFunctions from "../../../../utils/functions";
import { useAppDispatch } from "../../../../hooks/redux";
import { isActive } from "../../../../redux/reducers/menu";

const HeaderBurger = () => {
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    utilsFunctions.bodyLock();
    dispatch(isActive());
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="header__burger burger-header"
    >
      <div className="burger-header__wrapper">
        <span />
      </div>
    </button>
  );
};
export default HeaderBurger;
