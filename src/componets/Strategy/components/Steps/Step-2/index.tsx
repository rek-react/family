import "./Step.scss";
import StrategyStep2First from "./FirstStep";
import StrategyStep2Second from "./SecondStep";

const StrategyStep2 = () => {
  return (
    <div className="strategy__step-2 step-2-strategy">
      <div className="step-2-strategy__container container-less">
        <div className="step-2-strategy__body">
          <StrategyStep2First />
          <StrategyStep2Second />
        </div>
      </div>
    </div>
  );
};
export default StrategyStep2;
