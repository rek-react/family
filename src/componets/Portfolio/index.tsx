import Sort from "../Sort";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="page__portfolio portfolio">
      <div className="portfolio__container container-less">
        <div className="portfolio__title title title-middle">
          Кейсы — доказательство <span>результата</span>
        </div>
        <div className="portfolio__sort sort">
          <Sort />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
