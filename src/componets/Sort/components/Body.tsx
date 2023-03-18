import { FC } from "react";

const SorBodyt: FC<{
  element: FC;
}> = ({ element }) => {
  const Element = element;
  return (
    <div className="sort__body">
      <Element />
    </div>
  );
};
export default SorBodyt;
