import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PageContext from "./pages/Context";
import PageHome from "./pages/Home";
import DynamicAdapt from "./utils/dynamicAdapt";
import PageReviews from "./pages/Reviews";
import Layout from "./componets/Layout";
import PageAudit from "./pages/Audit";
import PageContacts from "./pages/Contacts";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    new DynamicAdapt("max");
  }, []);
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<PageHome />} />
        <Route path="/context" element={<PageContext />} />
        <Route path="/reviews" element={<PageReviews />} />
        <Route path="/audit" element={<PageAudit />} />
        <Route path="/contacts" element={<PageContacts />} />
      </Route>
    </Routes>
  );
};

export default App;
