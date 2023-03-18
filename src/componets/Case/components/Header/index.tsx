import React from "react";
import "./Header.scss";
import GradientText from "../../../UI/GradientText";

const CaseHeader = () => {
  return (
    <div className="case__header header-case case-body">
      <div className="header-case__col case-col">
        <div className="header-case__title title-more">
          <GradientText text="Результаты" />
          клиентов
        </div>
      </div>
      <div className="header-case__col case-col">
        {" "}
        <div className="header-case__text text">
          которые получили свою{" "}
          <a href="#">
            прибыль{" "}
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99609 1.50195C4.99609 0.949707 5.44385 0.501953 5.99609 0.501953H12.9961C13.5483 0.501953 13.9961 0.949707 13.9961 1.50195V8.50195C13.9961 9.0542 13.5483 9.50195 12.9961 9.50195C12.4438 9.50195 11.9961 9.0542 11.9961 8.50195V3.91602L1.70715 14.2051C1.31665 14.5956 0.683472 14.5956 0.292969 14.2051C-0.0976562 13.8145 -0.0976562 13.1814 0.292969 12.7908L10.5818 2.50195H5.99609C5.44385 2.50195 4.99609 2.0542 4.99609 1.50195Z"
                fill="#379BAD"
              />
            </svg>
          </a>{" "}
          от нашей работы
        </div>
      </div>
    </div>
  );
};
export default CaseHeader;
