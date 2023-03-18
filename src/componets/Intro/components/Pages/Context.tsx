import backContext from "../../images/backContext.png";
import GradientText from "../../../UI/GradientText";
import IntroHeaderSubTitle from "../Header/SubTitle";
import IntroHeaderTitle from "../Header/Title";
import IntroHeader from "../Header";
import IntroWrapper from "../Wrapper";
import IntroSecond from "../Second";
import SecondBtns from "../Second/Btns";
import SecondTitle from "../Second/Title";
import Order from "../../../Order";

const IntroContext = () => {
  return (
    <IntroWrapper background={backContext}>
      <IntroHeader>
        <IntroHeaderTitle>Контекстная реклама</IntroHeaderTitle>
        <IntroHeaderSubTitle>
          в Яндекс.Директ и Google Adwords в <GradientText text="Кирове" />
        </IntroHeaderSubTitle>
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
            <p>
              Вам нужны конкретные <span>заявки и звонки</span> клиентов – мы
              дадимих!
            </p>
          </Order>
          <Order btn="Заказать" price="0">
            Бесплатный аудит компании
          </Order>
        </SecondBtns>
      </IntroSecond>
    </IntroWrapper>
  );
};
export default IntroContext;
