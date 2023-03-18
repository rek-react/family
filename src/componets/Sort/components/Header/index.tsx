import { FC, useRef } from "react";
import { IArrSelect } from "../..";
import Spoiler from "../../../Spoiler";
import ActionIcon from "../../../UI/ActionIcon";
import "./Header.scss";

const SortHeader: FC<{
  selected: number;
  setSelected: React.Dispatch<number>;
  arrSelect: IArrSelect[];
}> = ({ selected, setSelected, arrSelect }) => {
  const ref = useRef() as React.MutableRefObject<HTMLUListElement>;
  const handleSelected = (e: React.MouseEvent) => {
    const index: number = Number((e.target as HTMLElement).dataset.index);
    setSelected(index);
  };

  return (
    <div className="sort__header header-sort">
      <div className="header-sort__title">Сортировать</div>
      <div className="header-sort__body">
        <Spoiler
          isSpoiler
          title={
            <div className="header-sort__current">
              <span className="title-less">{arrSelect[selected].title}</span>
              <ActionIcon
                svg={
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7045 13.333C12.0987 13.7241 12.0983 14.3575 11.7045 14.7484L6.741 19.6745C6.55598 19.8737 6.29106 19.9987 5.99932 19.9987C5.70074 19.9987 5.43026 19.8678 5.24476 19.6603L0.295471 14.7484C-0.0986649 14.3572 -0.0983168 13.7238 0.295471 13.333C0.689259 12.9422 1.32747 12.9418 1.7216 13.333L4.99089 16.5776L4.99089 1C4.99089 0.447717 5.44703 -2.86439e-07 5.99932 -2.62298e-07C6.5516 -2.38157e-07 7.00775 0.447715 7.00775 1L7.00774 16.579L10.2784 13.333C10.4622 13.1505 10.6993 13.0534 10.9399 13.0413C11.2146 13.0272 11.4942 13.1243 11.7045 13.333Z"
                      fill="#2D3845"
                    />
                  </svg>
                }
              />
            </div>
          }
        >
          <ul className="header-sort__list" ref={ref}>
            {arrSelect.map((item, index) => {
              if (item.title !== arrSelect[selected].title) {
                return (
                  <li
                    className="header-sort__item"
                    key={item.title}
                    data-index={index}
                    onClick={handleSelected}
                  >
                    {item.title}
                  </li>
                );
              }
            })}
          </ul>
        </Spoiler>
      </div>
    </div>
  );
};
export default SortHeader;
