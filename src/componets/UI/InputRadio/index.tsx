import { FC, useEffect } from "react";
import clsx from "clsx";
import { ControllerRenderProps } from "react-hook-form";
import "./InputRadio.scss";
interface RadioInputProps extends ControllerRenderProps {
  item: string;
  setIsInput?: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputRadio: FC<RadioInputProps> = ({ item, setIsInput, ...props }) => {
  const handleClick = () => {
    if (setIsInput) {
      setIsInput(false);
    }
  };
  return (
    <label
      className={clsx("inputRadio", {
        active: item === props.value,
      })}
    >
      {item}
      <input type="radio" {...props} onClick={handleClick} value={item} />
    </label>
  );
};
export default InputRadio;
