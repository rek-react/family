import "./Footer.scss";
import Order from "../../../Order";

const IfFooter = () => {
  return (
    <div className="if__footer footer-if">
      <div className="footer-if__info">
        <div className="footer-if__title title-less">
          Не уверены в компетенции своих специалистов или хотите получить
          стороннюю независимую оценку экспертов?
        </div>
        <div className="footer-if__text">
          Для подготовки аудита потребуется доступ к рекламным кабинетам
          Яндекс.Директ/Google Adwords и программам аналитики
          Яндекс.Метрика/Google Analytics
        </div>
      </div>
      <div className="footer-if__btn">
        <Order btn="Заказать" price="5 000">
          Аудит компании
        </Order>
      </div>
    </div>
  );
};
export default IfFooter;
