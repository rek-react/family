import { FC, PropsWithChildren } from "react";
import "./Reviews.scss";
const Reviews: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="page__reviews reviews">
      <div className="reviews__container container-less">{children}</div>
    </div>
  );
};
export default Reviews;
