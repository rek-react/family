import "./Strategy.scss";
import StrategyStep1 from "./components/Steps/Step-1";
import StrategyStep2 from "./components/Steps/Step-2";

const Strategy = () => {
  return (
    <div className="page__strategy strategy">
      <StrategyStep1 />
      <StrategyStep2 />
    </div>
  );
};
export default Strategy;
