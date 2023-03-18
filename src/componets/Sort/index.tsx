import { FC, useState } from "react";
import "./Sort.scss";
import SortBody from "./components/Body";
import SortHeader from "./components/Header";
import ReviewsItems from "../Reviews/components/Items";
import PortfolioItems from "../Portfolio/components/Items";

export interface IArrSelect {
  title: string;
  element: FC;
}

const arrSelect: IArrSelect[] = [
  {
    title: "Избранные",
    element: PortfolioItems,
  },
  {
    title: "Все отзывы",
    element: ReviewsItems,
  },
];

const Sort: FC<{ checked?: number }> = ({ checked = 0 }) => {
  let [selected, setSelected] = useState<number>(checked);

  return (
    <>
      <SortHeader
        arrSelect={arrSelect}
        selected={selected}
        setSelected={setSelected}
      />
      <SortBody element={arrSelect[selected].element} />
    </>
  );
};
export default Sort;
