import ActionIcon from "../../../UI/ActionIcon";
import GradientText from "../../../UI/GradientText";

const ContactFormFooter = () => {
  return (
    <div className="contactForm__footer footer-contactForm">
      <button type="submit" className="footer-contactForm__submit">
        <GradientText text="Отправить" />
        <ActionIcon
          svg={
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3335 0.295472C13.7246 -0.0986646 14.358 -0.0983164 14.7489 0.295472L19.675 5.259C19.8742 5.44402 19.9992 5.70894 19.9992 6.00068C19.9992 6.29926 19.8683 6.56974 19.6608 6.75523L14.7489 11.7045C14.3577 12.0987 13.7243 12.0983 13.3335 11.7045C12.9427 11.3107 12.9423 10.6725 13.3335 10.2784L16.5781 7.00911L1.00049 7.00911C0.448205 7.00911 0.000488281 6.55297 0.000488281 6.00068C0.000488281 5.4484 0.448204 4.99225 1.00049 4.99225L16.5795 4.99225L13.3335 1.7216C13.151 1.53777 13.0539 1.30066 13.0418 1.06007C13.0277 0.785356 13.1248 0.50577 13.3335 0.295472Z"
                fill="#1B558D"
              />
            </svg>
          }
        />
      </button>
      <div className="footer-contactForm__policy">
        Нажимая кнопку, вы соглашаетесь с политикой обработки персональных
        данных
      </div>
    </div>
  );
};
export default ContactFormFooter;
