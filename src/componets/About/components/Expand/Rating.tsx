const RatingExpand = () => {
  return (
    <div className="expand-about__rating rating-expand-about">
      <ul className="rating-expand-about__list">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <li
            key={item}
            className={`rating-expand-about__item rating-expand-about__item_${item}`}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="rating-expand-about__legends">
        <div className="rating-expand-about__legend">Никогда</div>
        <div className="rating-expand-about__legend">Может быть</div>
        <div className="rating-expand-about__legend">Обязательно</div>
      </div>
    </div>
  );
};
export default RatingExpand;
