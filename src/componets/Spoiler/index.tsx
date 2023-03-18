import { FC, PropsWithChildren, useState, ReactNode } from "react";
import "./Spoiler.scss";
import clsx from "clsx";

interface SpoilerProps {
  title: string | ReactNode;
  isSpoiler: boolean;
}

const Spoiler: FC<PropsWithChildren<SpoilerProps>> = ({
  children,
  title,
  isSpoiler,
}) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="spoiler">
      <div
        onClick={() => setShowContent(!showContent)}
        className={clsx("spoiler__button", {
          active: isSpoiler && showContent,
        })}
      >
        {title}
      </div>
      <div
        className={clsx("spoiler__content", {
          show: isSpoiler && showContent,
          active: isSpoiler,
        })}
      >
        {children}
      </div>
    </div>
  );
};
export default Spoiler;
