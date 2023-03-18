import ActionIcon from "../../../UI/ActionIcon";
import "./Feedback.scss";

const HeaderFeedback = () => {
  return (
    <div className="header__feedback feedback-header">
      <a
        href="tel:88003514566"
        className="feedback-header__item feedback-header__item_tel"
        data-da=".nav-header, 525, 1"
      >
        8 800 351 45 66
      </a>

      <div
        className="feedback-header__item feedback-header__item_will-btn item-feedback-header"
        data-da=".nav-header, 992, 1"
      >
        <div className="item-feedback-header__text">Привлечь клиентов</div>
        <ActionIcon
          buttonClassName="item-feedback-header__btn"
          svg={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9C6.55228 9 7 9.44771 7 10V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V10C9 9.44772 9.44771 9 10 9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H10C9.44772 7 9 6.55228 9 6V1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V6C7 6.55228 6.55228 7 6 7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H6Z"
                fill="#1B558D"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};
export default HeaderFeedback;
