import React, { ChangeEvent } from "react";

interface CitySearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const CitySearch: React.FC<CitySearchProps> = ({ search, setSearch }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="city-dialog__search search-city">
      <input
        type="text"
        onChange={handleChange}
        autoFocus
        placeholder="Поиск города"
        value={search}
        className="search-city__input"
      />
    </div>
  );
};
export default CitySearch;
