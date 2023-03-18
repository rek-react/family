import backIndex from "../../images/backIndex.png";
import IntroHeader from "../Header";
import IntroSecond from "../Second";
import IntroWrapper from "../Wrapper";
import GradientText from "../../../UI/GradientText";
import IntroHeaderTitle from "../Header/Title";
import SecondBtns from "../Second/Btns";
import SecondTitle from "../Second/Title";
import Order from "../../../Order";

const IntroIndex = () => {
  return (
    <IntroWrapper background={backIndex}>
      <IntroHeader>
        <IntroHeaderTitle>
          Приведём клиентов <GradientText text="49 ₽ за лид" /> в течение 1 дня
        </IntroHeaderTitle>
      </IntroHeader>
      <IntroSecond>
        <SecondTitle>
          Вам не нужны
          <span>
            настройки, дизайны, верстки, сайты, соц. сети, показы, клики и
            прочее
          </span>
        </SecondTitle>
        <SecondBtns>
          <Order btn="Рассчитать результат">
            Вам нужны конкретные <span>заявки и звонки</span> клиентов – мы
            дадимих!
          </Order>
        </SecondBtns>
      </IntroSecond>
    </IntroWrapper>
  );
};
export default IntroIndex;
