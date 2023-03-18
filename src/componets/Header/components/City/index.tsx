import "./City.scss";
import { useAppSelector } from "../../../../hooks/redux";
import { useState } from "react";
import Modal from "../../../Modal";
import DialogCity from "./Dialog";

const HeaderCity = () => {
  const [open, setOpen] = useState(false);
  const { currentCity } = useAppSelector((state) => state.city);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="header__city city-header" data-da=".nav-header, 992, 1">
      <button className="city-header__current" onClick={() => openModal()}>
        <span>{currentCity}</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7477 2.04083C12.0841 1.70077 12.0841 1.14943 11.7477 0.809374L11.6939 0.755043C11.3575 0.414986 10.8121 0.414986 10.4757 0.755043L5.99671 5.28259L1.5243 0.761685C1.18789 0.421628 0.642466 0.421628 0.306055 0.761685L0.252307 0.816017C-0.0841027 1.15607 -0.0841027 1.70742 0.252308 2.04747L5.39404 7.24496C5.73045 7.58501 6.27588 7.58501 6.61229 7.24496L6.66604 7.19063C6.69626 7.16008 6.72377 7.12782 6.74856 7.09417L11.7477 2.04083Z"
            fill="#2D3845"
          />
        </svg>
      </button>
      <Modal open={open} closeModal={closeModal}>
        <DialogCity closeModal={closeModal} />
      </Modal>
    </div>
  );
};
export default HeaderCity;
