import "./Price.scss";
import PriceHeader from "./components/Header";
import PriceItems from "./components/Items";
import Btn from "../UI/Btn";
import PriceFooter from "./components/Footer";

const Price = () => {
  return (
    <div className="page__price price">
      <div className="price__container container-more">
        <PriceHeader />
        <PriceItems />
        <PriceFooter />
      </div>
    </div>
  );
};
export default Price;
