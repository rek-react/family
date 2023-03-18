import "./Case.scss";
import CaseHeader from "./components/Header";
import CaseBody from "./components/Body";
const Case = () => {
  return (
    <div className="page__case case">
      <div className="case__container container-less">
        <CaseHeader />
        <CaseBody />
      </div>
    </div>
  );
};
export default Case;
