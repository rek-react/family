import { FC, PropsWithChildren } from "react";

const IntroWrapper: FC<
  PropsWithChildren<{
    background: string;
  }>
> = ({ background, children }) => {
  return (
    <div className="page__intro intro">
      <div className="intro__wrapper">
        <div className="intro__container container-less">{children}</div>
        <div className="intro__image bg" data-da=".intro__container, 525, 1">
          <img src={background} alt="" />
        </div>
      </div>
    </div>
  );
};
export default IntroWrapper;
