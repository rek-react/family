import { FC, PropsWithChildren } from "react";
import "./Order.scss";
import ActionIcon from "../UI/ActionIcon";
import GradientText from "../UI/GradientText";

interface OrderProps {
  href?: string;
  btn: string;
  price?: string;
}

const Order: FC<PropsWithChildren<OrderProps>> = ({
  href = "#",
  children,
  btn,
  price,
}) => {
  return (
    <a href={href} className="order">
      {price && <div className="order__title title-less">{price} ₽</div>}
      <div className="order__text text">{children}</div>
      <div className="order__btn">
        <GradientText text={btn} />
        <ActionIcon
          svg={
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99805 1.50195C4.99805 0.949707 5.4458 0.501953 5.99805 0.501953H12.998C13.5503 0.501953 13.998 0.949707 13.998 1.50195V8.50195C13.998 9.0542 13.5503 9.50195 12.998 9.50195C12.4458 9.50195 11.998 9.0542 11.998 8.50195V3.91602L1.70911 14.2051C1.3186 14.5956 0.685425 14.5956 0.294922 14.2051C-0.0957031 13.8145 -0.0957031 13.1814 0.294922 12.7908L10.5837 2.50195H5.99805C5.4458 2.50195 4.99805 2.0542 4.99805 1.50195Z"
                fill="#1B558D"
              ></path>
            </svg>
          }
        />
      </div>
    </a>
  );
};
export default Order;
