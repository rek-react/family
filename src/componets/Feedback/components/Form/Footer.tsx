import ActionIcon from "../../../UI/ActionIcon";

const FeedbackFormFooter = () => {
  return (
    <div className="form-feedback__footer footer-form-feedback">
      <button type="submit" className="footer-form-feedback__btn-submit">
        <span>Отправить</span>
        <ActionIcon
          buttonClassName="action-icon-dark"
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
                fill="white"
              ></path>
            </svg>
          }
        />
      </button>
      <div className="footer-form-feedback__policy">
        Нажимая кнопку, вы соглашаетесь с <a href="#">политикой</a> обработки
        персональных данных
      </div>
    </div>
  );
};
export default FeedbackFormFooter;
