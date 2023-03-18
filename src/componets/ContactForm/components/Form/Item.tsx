import { FC, useState, useEffect, PropsWithChildren } from "react";
import { ControllerRenderProps, UseFormSetValue } from "react-hook-form";
import clsx from "clsx";
import InputRadio from "../../../UI/InputRadio";
import InputError from "../../../UI/InputError";

interface ContactFormItemProps extends Partial<ControllerRenderProps> {
  title: string;
  placeholder?: string;
  setValue?: UseFormSetValue<any>;
  listItems?: string[];
  isError?: boolean;
}

const ContactFormItem: FC<PropsWithChildren<ContactFormItemProps>> = ({
  title,
  placeholder,
  listItems,
  setValue,
  isError,
  children,
  ...props
}) => {
  const field = props as ControllerRenderProps;
  const [isInput, setIsInput] = useState(false);
  useEffect(() => {
    if (isInput && setValue) {
      setValue(field.name, "");
    }
  }, [isInput]);
  const handleClick = () => {
    setIsInput(true);
  };

  return (
    <div className="contactForm__item item-contactForm">
      <div className="item-contactForm__title title-less">{title}</div>
      {listItems && (
        <div className="item-contactForm__list">
          {listItems.map((item) => (
            <InputRadio
              key={item}
              setIsInput={setIsInput}
              item={item}
              {...field}
            />
          ))}
          {placeholder && (
            <div
              className={clsx("inputRadio", {
                active: isInput,
              })}
              onClick={handleClick}
            >
              Другое
            </div>
          )}
        </div>
      )}
      {children && <div className="item-contactForm__inputs">{children}</div>}
      {isInput && (
        <input
          type="text"
          className="item-contactForm__input"
          placeholder={placeholder}
          {...field}
        />
      )}
      {isError && <InputError message="Этот параметр обязателен" />}
    </div>
  );
};
export default ContactFormItem;
