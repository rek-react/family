import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import InputError from "../UI/InputError";
import InputRadio from "../UI/InputRadio";
import "./Time.scss";

const timeItems = [
  {
    time: "10:00 - 13:00",
  },
  {
    time: "13:00 - 16:00",
  },
  {
    time: "16:00 - 19:00",
  },
];

interface TimeProps extends Control<any> {
  error: boolean;
}

const Time: FC<TimeProps> = ({ error, ...control }) => {
  return (
    <div className="time">
      <div className="time__title title-less">
        Удобное время для звонка (по МСК)
      </div>
      <div className="time__items">
        <Controller
          name="time"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              {timeItems.map(({ time }) => (
                <InputRadio key={time} item={time} {...field} ref={null!} />
              ))}
            </>
          )}
        />
      </div>
      {error && <InputError message="Выберите время" />}
      <div className="time__text">
        Работаем по будням с 9:00 до 18:00. Заявки, отправленные в выходные,
        обрабатываем в первый рабочий день до 11:00
      </div>
    </div>
  );
};
export default Time;
