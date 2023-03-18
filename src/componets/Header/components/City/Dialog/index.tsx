import { FC } from "react";
import { useState } from "react";
import "./Modal.scss";
import "../../../images/search.png";
import { useDebounce } from "../../../../../hooks/useDebounce";
import { useAppSelector } from "../../../../../hooks/redux";
import CitySearch from "./Search";
import CityItems from "./Items";

const DialogCity: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [search, setSearch] = useState<string>("");
  const debounced = useDebounce(search);
  const { currentCity } = useAppSelector((state) => state.city);

  return (
    <div className="city-dialog">
      <div className="city-dialog__title">
        Выбранный регион: <span>{currentCity}</span>
      </div>
      <CitySearch search={search} setSearch={setSearch} />
      <CityItems city={debounced} closeModal={closeModal} />
    </div>
  );
};
export default DialogCity;
