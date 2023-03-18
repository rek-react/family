import Feedback from "../componets/Feedback";
import If from "../componets/If";
import Intro from "../componets/Intro";
import Portfolio from "../componets/Portfolio";

const PageAudit = () => {
  return (
    <>
      <Intro page="audit" />
      <Portfolio />
      <Feedback
        title="Аудит через 3 дня"
        text="Закажите аудит контекстной рекламы, если вы планируете сменить подрядчика или хотите проверить качество текущего продвижения. Аудит будет готов через 3 рабочих дня"
      />
      <If />
    </>
  );
};
export default PageAudit;
