import "./Header.scss";
import GradientText from "../../../UI/GradientText";

const PriceHeader = () => {
  return (
    <div className="price__header header-price">
      <div className="header-price__title title-middle">
        <GradientText text="Тарифы" />
      </div>
      <div className="header-price__subtitle title-less">
        Выберите подходящий тариф в зависимости от рекламного бджета
      </div>
    </div>
  );
};
export default PriceHeader;
