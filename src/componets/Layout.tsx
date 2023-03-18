import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Social from "./Social";
import Wrapper from "./Wrapper";

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
      <Social />
    </Wrapper>
  );
};
export default Layout;
