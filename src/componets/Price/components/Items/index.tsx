import { useMediaQuery } from "react-responsive";
import "./Items.scss";

const priceArr = [
  {
    name: "Яндекс.Директ",
    price: "14 500",
  },
  {
    name: "Google Adwords",
    price: "14 500",
  },
  {
    name: "Яндекс.Директ + Google Adwords",
    price: "20 500",
  },
  {
    name: "Яндекс.Директ + Google Adwords + Коллтрекинг",
    price: "54 500",
  },
];

const PriceItems = () => {
  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });
  return (
    <div className="price__items items-price">
      {priceArr.map(({ name, price }) => (
        <a href="#" className="items-price__item" key={name}>
          <div className="items-price__name">{name}</div>
          <div className="items-price__price">
            <span>от</span>
            <span className="title-less">{price} ₽</span>
          </div>
          {!isLaptop && (
            <div className="items-price__more">
              <span>Заказать</span>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99805 1.50195C4.99805 0.949707 5.4458 0.501953 5.99805 0.501953H12.998C13.5503 0.501953 13.998 0.949707 13.998 1.50195V8.50195C13.998 9.0542 13.5503 9.50195 12.998 9.50195C12.4458 9.50195 11.998 9.0542 11.998 8.50195V3.91602L1.70911 14.2051C1.3186 14.5956 0.685425 14.5956 0.294922 14.2051C-0.0957031 13.8145 -0.0957031 13.1814 0.294922 12.7908L10.5837 2.50195H5.99805C5.4458 2.50195 4.99805 2.0542 4.99805 1.50195Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
          )}
        </a>
      ))}
    </div>
  );
};
export default PriceItems;
