import "./Nav.scss";
import HeaderNavList from "./List";
const HeaderNav = () => {
  return (
    <nav className="header__nav nav-header scroll-bar">
      <HeaderNavList />
      <div className="nav-header__social-messages social-messages">
        <div className="social-messages__text">Мы в мессенджерах</div>
      </div>
    </nav>
  );
};

export default HeaderNav;
