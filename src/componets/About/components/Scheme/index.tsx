import { FC } from "react";
import "./Scheme.scss";
import { AboutProps } from "../..";
import DeskScheme from "./Desk";

const AboutScheme: FC<AboutProps> = ({ percent }) => {
  return (
    <div className="about__scheme scheme-about">
      <div className="scheme-about__text text">
        В ходе опроса, проведенного среди клиентов в 2021 году получен индекс{" "}
        <span>NPS</span>
      </div>
      <div className="scheme-about__diag diag-scheme-about">
        <div className="diag-scheme-about__line">
          <div
            className="diag-scheme-about__grad"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <div
          className="diag-scheme-about__percent gradient-text"
          style={{
            left: `${percent > 70 || percent < 30 * 100 ? 60 : percent + 9}%`,
          }}
        >
          {percent} <span>%</span>
        </div>
      </div>
      <DeskScheme />
    </div>
  );
};
export default AboutScheme;
