import "./Form.scss";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import FeedbackFormFooter from "./Footer";
import InputError from "../../../UI/InputError";
import Time from "../../../Time";

const defaultValues = {
  name: "",
  phone: "",
  time: "",
};

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues });

  const handleOnSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="feedback__form form-feedback"
    >
      <div className="form-feedback__body">
        <div className="form-feedback__col">
          <div className="form-feedback__inputs inputs-feedback">
            <div className="inputs-feedback__input">
              <input
                type="text"
                {...register("name", {
                  required: true,
                  minLength: 2,
                  maxLength: 30,
                })}
                placeholder="Ваше имя"
              />
              {errors.name && (
                <InputError message="Имя должно быть от 2 до 30 символов" />
              )}
            </div>
            <div className="inputs-feedback__input">
              <input
                type="tel"
                placeholder="Ваш телефон"
                {...register("phone", {
                  required: true,
                  validate: (value) => isValidPhoneNumber(value, "RU"),
                })}
              />
              {errors.phone && <InputError message="Неверный телефон" />}
            </div>
          </div>
        </div>
        <div className="form-feedback__col">
          <Time error={!!errors.time} {...control} />
        </div>
      </div>
      <FeedbackFormFooter />
    </form>
  );
};
export default FeedbackForm;
