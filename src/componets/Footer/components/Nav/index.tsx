import "./Nav.scss";
import FooterNavItem from "./Item";

const FooterNav = () => {
  return (
    <nav className="footer__nav nav-footer">
      <div className="nav-footer__body footer-body">
        <FooterNavItem />
      </div>
    </nav>
  );
};
export default FooterNav;
