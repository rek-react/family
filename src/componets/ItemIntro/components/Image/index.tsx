import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import "./Image.scss";

const ItemIntroImage: FC<{
  srcImage: string;
}> = ({ srcImage }) => {
  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });
  return (
    <div className="image-itemIntro bg">
      <img src={srcImage} alt="" />
      <a href="#" className="image-itemIntro__more ">
        <span>подробнее</span>
        {isLaptop ? (
          <svg
            className="image-itemIntro__cross"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9C6.55228 9 7 9.44771 7 10V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V10C9 9.44772 9.44771 9 10 9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H10C9.44772 7 9 6.55228 9 6V1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V6C7 6.55228 6.55228 7 6 7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H6Z"
              fill="#1B558D"
            ></path>
          </svg>
        ) : (
          <svg
            className="image-itemIntro__arrow"
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3336 0.295472C13.7248 -0.0986646 14.3582 -0.0983164 14.749 0.295472L19.6751 5.259C19.8744 5.44402 19.9993 5.70894 19.9993 6.00068C19.9993 6.29926 19.8684 6.56974 19.6609 6.75523L14.749 11.7045C14.3578 12.0987 13.7244 12.0983 13.3336 11.7045C12.9428 11.3107 12.9424 10.6725 13.3336 10.2784L16.5782 7.00911L1.00061 7.00911C0.448327 7.00911 0.000610352 6.55297 0.000610352 6.00068C0.000610352 5.4484 0.448326 4.99225 1.00061 4.99225L16.5796 4.99225L13.3336 1.7216C13.1511 1.53777 13.054 1.30066 13.042 1.06007C13.0278 0.785356 13.1249 0.50577 13.3336 0.295472Z"
              fill="#2D3845"
            />
          </svg>
        )}
      </a>
    </div>
  );
};
export default ItemIntroImage;
