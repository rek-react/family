import "./Info.scss";

const ContactsInfo = () => {
  return (
    <div className="contacts__info info-contacts">
      <div className="info-contacts__items">
        <div className="info-contacts__item">
          <div className="info-contacts__subtitle">Единый бесплатный номер</div>
          <div className="info-contacts__title title-less">8 800 351 45 66</div>
        </div>
        <div className="info-contacts__item">
          <div className="info-contacts__subtitle">e-mail</div>
          <div className="info-contacts__title  title-less">
            info@family-web.ru
          </div>
        </div>
        <div className="info-contacts__item">
          <div className="info-contacts__subtitle">Адрес</div>
          <div className="info-contacts__title title-less">
            Киров, Молодой Гвардии, 90
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactsInfo;
