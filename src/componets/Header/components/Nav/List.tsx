import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux";
import { isActive } from "../../../../redux/reducers/menu";
import utilsFunctions from "../../../../utils/functions";
import { useMediaQuery } from "react-responsive";
import Spoiler from "../../../Spoiler";
const arrItem = [
  {
    text: "Услуги",
    toBlock: [
      {
        text: "Контекстная реклама",
      },
      {
        text: "Аудит контекстной рекламы",
      },
      {
        text: "SEO",
      },
      {
        text: "Аудит SEO",
      },
    ],
  },
  {
    to: "/audit",
    text: "Аудит",
  },
  {
    to: "/reviews",
    text: "Отзывы",
  },
  {
    to: "/contacts",
    text: "Контакты",
  },
];
const HeaderNavList = () => {
  const dispatch = useAppDispatch();
  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  const isBurger = useMediaQuery({
    query: "(max-width: 1600px)",
  });
  
  const handleClick = () => {
    if(isBurger){
      utilsFunctions.bodyLock();
      dispatch(isActive());
    }
  };
  return (
    <ul className="nav-header__list">
      {arrItem.map((item) => {
        if (item.toBlock) {
          return (
            <li
              data-da=".nav-header__list, 1600"
              className="nav-header__item nav-header__item_services"
              key={item.text}
            >
              <Spoiler
                isSpoiler={isLaptop}
                title={
                  <button className="nav-header__link">{item.text}</button>
                }
              >
                <ul className="nav-header__sub-list">
                  {item.toBlock.map(({ text }) => (
                    <li key={text} className="nav-header__sub-item">
                      <Link
                        onClick={handleClick}
                        className="nav-header__sub-link"
                        to="/"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Spoiler>
            </li>
          );
        } else {
          return (
            <li key={item.text} className="nav-header__item">
              <Link
                onClick={handleClick}
                className="nav-header__link"
                to={item.to}
              >
                {item.text}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};
export default HeaderNavList;
