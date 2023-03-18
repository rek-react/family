import "./If.scss";
import GradientText from "../UI/GradientText";
import IfItems from "./components/Items";
import IfFooter from "./components/Footer";

const If = () => {
  return (
    <div className="page__if if">
      <div className="if__container container-more">
        <div className="if__body">
          <div className="if__col">
            <div className="if__title title-more">
              <GradientText text="Аудит" /> нужен, если:
            </div>
          </div>
          <div className="if__col">
            <IfItems />
          </div>
        </div>
        <IfFooter />
      </div>
    </div>
  );
};
export default If;
