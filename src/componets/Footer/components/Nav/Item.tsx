import { useMediaQuery } from "react-responsive";
import Spoiler from "../../../Spoiler";

interface IItemNav {
  title: string;
  list: string[];
}

type ItemsNavType = { item: IItemNav[] }[];

const itemsNav: ItemsNavType = [
  {
    item: [
      {
        title: "Интернет маркетинг",
        list: [
          "Контекстная реклама в Яндекс и Google",
          "Аудит контекстной рекламы",
          "Реклама в социальных сетях Facevook и Instagram",
          "Реклама на Авито (Авитолог)",
        ],
      },
      {
        title: "CRM-аналитика",
        list: [
          "Внедрение Битрикс 24",
          "Подключение коллтрекинга",
          "Создание автоматизированных отчетов Power Bi",
        ],
      },
    ],
  },
  {
    item: [
      {
        title: "Разработка",
        list: ["Создание Landing Page", " Создание сайтов", "Контакты"],
      },
      {
        title: "Продвижение в поисковых системах",
        list: ["SEO оптимизация", "Аудит SEO оптимизации"],
      },
    ],
  },
  {
    item: [
      {
        title: "Компания",
        list: ["Кейсы", "Отзывы", "Клиенты", "Контакты"],
      },
    ],
  },
];

const FooterNavItem = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 650px)",
  });
  return (
    <>
      {itemsNav.map((itemNav) => (
        <div key={itemNav.item[0].title} className="nav-footer__col footer-col">
          {itemNav.item.map((item) => (
            <div key={item.title} className="nav-footer__item item-nav-footer">
              <Spoiler
                isSpoiler={isTablet}
                title={
                  <div className="item-nav-footer__title">
                    <span>{item.title}</span>
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7477 4.04083C12.0841 3.70077 12.0841 3.14943 11.7477 2.80937L11.6939 2.75504C11.3575 2.41499 10.8121 2.41499 10.4757 2.75504L5.99671 7.28259L1.5243 2.76169C1.18789 2.42163 0.642466 2.42163 0.306055 2.76169L0.252307 2.81602C-0.0841027 3.15607 -0.0841027 3.70742 0.252308 4.04747L5.39404 9.24496C5.73045 9.58501 6.27588 9.58501 6.61229 9.24496L6.66604 9.19063C6.69626 9.16008 6.72377 9.12782 6.74856 9.09417L11.7477 4.04083Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                }
              >
                <ul className="item-nav-footer__list">
                  {item.list.map((itemList) => (
                    <li key={itemList} className="item-nav-footer__item">
                      <a href="#" className="item-nav-footer__link">
                        {itemList}
                      </a>
                    </li>
                  ))}
                </ul>
              </Spoiler>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
export default FooterNavItem;
