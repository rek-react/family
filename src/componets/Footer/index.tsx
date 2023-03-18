import "./Footer.scss";
import FooterHeader from "./components/Header";
import FooterNav from "./components/Nav";
import FooterContact from "./components/Contact";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container-more">
        <FooterHeader />
        <FooterContact />
        <FooterNav />
      </div>
    </footer>
  );
};
export default Footer;
