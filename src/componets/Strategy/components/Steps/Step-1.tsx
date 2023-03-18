import "./Step-1.scss";
import products from "../../images/products.png";
import services from "../../images/services.png";
import content from "../../images/content.png";
import site from "../../images/site.png";
import GradientText from "../../../UI/GradientText";

const StrategyStep1 = () => {
  return (
    <div className="strategy__step-1 step-1-strategy">
      <div className="step-1-strategy__container container-less">
        <div
          className="strategy__title title-more"
          data-da=".step-2-strategy__container, 768,first"
        >
          <span>Разработаем</span>
          digital
          <GradientText text="стратегию" />
        </div>
        <div className="step-1-strategy__body">
          <div className="step-1-strategy__row">
            <a
              href="#"
              className="step-1-strategy__item item-step-1-strategy bg"
            >
              <span className="item-step-1-strategy__name">Товары</span>
              <img
                src={products}
                alt=""
                className="item-step-1-strategy__image"
              />
            </a>
            <div className="step-1-strategy__site site-step-1-strategy bg">
              <img src={site} />
            </div>
            <a
              href="#"
              className="step-1-strategy__item item-step-1-strategy bg"
            >
              <span className="item-step-1-strategy__name">Услуги</span>
              <img src={services} alt="" className="item-strategy__image" />
            </a>
          </div>
          <div className="step-1-strategy__row step-1-strategy__row_one">
            <a
              href="#"
              className="step-1-strategy__item item-step-1-strategy bg"
            >
              <span className="item-step-1-strategy__name">Контент</span>
              <img
                src={content}
                alt=""
                className="item-step-1-strategy__image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StrategyStep1;
