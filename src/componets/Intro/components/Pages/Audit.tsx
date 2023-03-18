import backAudit from "../../images/backAudit.png";
import IntroHeaderTitle from "../Header/Title";
import IntroHeader from "../Header";
import IntroWrapper from "../Wrapper";
import IntroSecond from "../Second";
import SecondBtns from "../Second/Btns";
import SecondTitle from "../Second/Title";
import Order from "../../../Order";

const IntroAudit = () => {
  return (
    <IntroWrapper background={backAudit}>
      <IntroHeader>
        <IntroHeaderTitle>Аудит контекстной рекламы</IntroHeaderTitle>
      </IntroHeader>
      <IntroSecond>
        <SecondTitle>
          Комплексный анализ компаний Яндекс.Директ и Google Adwords по 40
          критериям
        </SecondTitle>
        <SecondBtns>
          <Order btn="Получить аудит">
            Не слить рекламный бюджет и гарантированно получить клиентов.
          </Order>
          <Order btn="Заказать" price="5 000">
            Аудит компании
          </Order>
        </SecondBtns>
      </IntroSecond>
    </IntroWrapper>
  );
};
export default IntroAudit;
