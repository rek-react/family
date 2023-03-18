import { FC, PropsWithChildren } from "react";
import ActionIcon from "../../../UI/ActionIcon";
import "./Item.scss";
const SocialItem: FC<
  PropsWithChildren<{
    href: string;
  }>
> = ({ href, children }) => {
  return (
    <li className="social__item item-social">
      <a href={href} target="_blank" className="item-social__link">
        <ActionIcon svg={children} />
      </a>
    </li>
  );
};
export default SocialItem;
