import { useState } from "react";
import "./Expand.scss";
import ActionIcon from "../../../UI/ActionIcon";
import ItemExpand from "./Item";
import RatingExpand from "./Rating";

const AboutExpand = () => {
  const [isRating, setIsRating] = useState<boolean>(true);

  const handleClickClose = () => {
    setIsRating(false);
  };

  return (
    <>
      {isRating && (
        <div className="about__expand expand-about">
          <ActionIcon
            buttonClassName="expand-about__close action-icon-white"
            handleClick={handleClickClose}
            svg={
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.33535 10.0461C-0.111553 10.493 -0.111553 11.2177 0.33535 11.6646C0.782252 12.1115 1.50694 12.1115 1.95384 11.6646L5.99993 7.61852L10.0461 11.6647C10.493 12.1116 11.2177 12.1116 11.6646 11.6647C12.1115 11.2178 12.1115 10.4931 11.6646 10.0462L7.61842 6.00003L11.6648 1.95367C12.1117 1.50676 12.1117 0.782079 11.6648 0.335177C11.2179 -0.111726 10.4932 -0.111726 10.0463 0.335177L5.99993 4.38154L1.95367 0.335269C1.50676 -0.111633 0.782079 -0.111633 0.335177 0.335269C-0.111726 0.782171 -0.111726 1.50686 0.335177 1.95376L4.38144 6.00003L0.33535 10.0461Z"
                  fill="#2D3845"
                />
              </svg>
            }
          />
          <div className="expand-about__body">
            <ItemExpand
              text="насколько вероятно, что вы нас порекомендуете?"
              title="Мы спросили:"
            />
            <RatingExpand />
            <ItemExpand
              text="процент промоутеров (9 и 10) минус процент дистракторов (от 1 до
                        8)"
              title="NPS равен:"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default AboutExpand;
