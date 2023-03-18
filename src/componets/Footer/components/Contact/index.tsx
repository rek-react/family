import "./Contact.scss";
import ContactCall from "./Call";
import ContactSocial from "./Social";
import ContactCopyright from "./Copyright";

const FooterContact = () => {
  return (
    <div className="footer__contact contact-footer">
      <div className="contact-footer__body footer-body">
        <div className="contact-footer__col footer-col">
          <ContactCall />
        </div>
        <div className="contact-footer__col footer-col">
          <ContactSocial />
        </div>
        <div className="contact-footer__col contact-footer__col_last footer-col">
          <ContactCopyright />
        </div>
      </div>
    </div>
  );
};
export default FooterContact;
