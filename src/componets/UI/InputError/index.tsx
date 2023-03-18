import { FC } from "react";
import "./InputError.scss";

const InputError: FC<{ message: string }> = ({ message }) => {
  return <div className="inputError">{message}</div>;
};
export default InputError;
