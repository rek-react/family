import ContactFormBody from "./components/Form";
import ContactFormHeader from "./components/Header";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="page__contactForm contactForm">
      <div className="contactForm__container container-less">
        <ContactFormHeader />
        <ContactFormBody />
      </div>
    </div>
  );
};

export default ContactForm;
