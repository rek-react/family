import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { useGetCitiesQuery } from "../../../../../api/cities";
import { useAppDispatch } from "../../../../../hooks/redux";
import { changeCity } from "../../../../../redux/reducers/currentCity";
import { isActive } from "../../../../../redux/reducers/menu";
import utilsFunctions from "../../../../../utils/functions";

interface CityItemsProps {
  city: string;
  closeModal: () => void;
}

const CityItems: FC<CityItemsProps> = ({ city, closeModal }) => {
  const {
    data: cities = [],
    isLoading,
    isError,
  } = useGetCitiesQuery({
    city,
  });
  const dispatch = useAppDispatch();
  const isLaptop = useMediaQuery({
    query: "(max-width:992px)",
  });
  if (isError)
    return (
      <div className="city-dialog__error">
        Произошла ошибка, попробуйте выполнить запрос позже
      </div>
    );
  if (isLoading) return <div className="city-dialog__loading"></div>;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLElement).textContent;
    if (value) {
      dispatch(changeCity(value));
      utilsFunctions.bodyLock();
      closeModal();
      if (isLaptop) {
        dispatch(isActive());
      }
    }
  };

  return (
    <div className="city-dialog__items scroll-bar">
      {cities.map((_, index) => {
        return (
          <div key={index} className="city-dialog__item item-city-dialog">
            {cities[index].map(({ _id, city }) => (
              <button
                type="button"
                className="item-city-dialog__name"
                onClick={handleClick}
                key={_id}
              >
                {city}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
};
export default CityItems;
