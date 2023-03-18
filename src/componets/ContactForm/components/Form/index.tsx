import { useForm, Controller } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import Time from "../../../Time";
import InputError from "../../../UI/InputError";
import "./Form.scss";
import ContactFormFooter from "./Footer";
import ContactFormItem from "./Item";

const listItems = {
  service: [
    "Контекстная реклама",
    "Аудит контекстной рекламы",
    "SEO",
    "Аудит SEO",
    "Дизайн сайта",
    "Разработка",
  ],
  company: [
    "Нет",
    "Группа Вконтакте",
    "Сайт-каталог",
    "Интернет-магазин",
    "Instagram",
    "Лендинг",
  ],
  budget: [
    "10-20 т.р.",
    "30-40 т.р.",
    "40-50 т.р.",
    "50-100 т.р.",
    "более 100 т.р.",
  ],
};

const defaultValues = {
  service: listItems.service[0],
  company: listItems.company[0],
  budget: listItems.budget[0],
  name: "",
  phone: "",
  email: "",
  aboutProject: "",
  time: "",
};

const ContactFormBody = () => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const handleOnSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="contactForm__body">
      <Controller
        name="service"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <ContactFormItem
            {...field}
            ref={null!}
            setValue={setValue}
            isError={!!errors.service}
            listItems={listItems.service}
            placeholder="Опишите, что вам необходимо"
            title="Мне необходимо"
          />
        )}
      />
      <Controller
        name="company"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <ContactFormItem
            {...field}
            ref={null!}
            setValue={setValue}
            isError={!!errors.company}
            listItems={listItems.company}
            placeholder="Ссылки, через пробел"
            title="Уже есть ресурсы?"
          />
        )}
      />
      <Controller
        name="budget"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <ContactFormItem
            {...field}
            ref={null!}
            isError={!!errors.budget}
            listItems={listItems.budget}
            title="Планируемый бюджет"
          />
        )}
      />
      <ContactFormItem title="Планируемый бюджет">
        <input
          type="text"
          {...register("name", {
            required: true,
            minLength: 2,
            maxLength: 30,
          })}
          placeholder="Имя"
          className="item-contactForm__input"
        />
        {errors.name && (
          <InputError message="Имя должно быть от 2 до 30 символов" />
        )}
        <input
          type="tel"
          placeholder="Телефон"
          {...register("phone", {
            required: true,
            validate: (value) => isValidPhoneNumber(value, "RU"),
          })}
          className="item-contactForm__input"
        />
        {errors.phone && <InputError message="Неверный телефон" />}
        <input
          type="email"
          placeholder="e-mail"
          {...register("email", {
            required: true,
            validate: (value) => /\S+@\S+\.\S+/.test(value),
          })}
          className="item-contactForm__input"
        />
        {errors.email && <InputError message="Неверный email" />}
        <textarea
          placeholder="О проекте"
          {...register("aboutProject", {
            required: true,
            minLength: 2,
          })}
          className="item-contactForm__input"
        />
        {errors.aboutProject && (
          <InputError message="Длина должна быть от 2 символов" />
        )}
      </ContactFormItem>
      <Time error={!!errors.time} {...control} />
      <ContactFormFooter />
    </form>
  );
};
export default ContactFormBody;
