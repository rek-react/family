import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Items.scss";

const defaultItems = [
  "Рекламная кампания не дает желаемых результатов",
  "Эффективность кампании резко снизилась",
  "Хотите выжать из контекстной рекламы максимум",
  "Слишком высокие бюджеты",
  "Текущая кампания не приносит желаемых результатов",
];

const IfItems = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [elements, setElements] = useState(defaultItems);
  const isNotMobile = useMediaQuery({
    query: "(min-width: 525px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = ref.current?.scrollTop!;
      const scrollHeight = ref.current?.scrollHeight!;
      const height = ref.current?.clientHeight!;
      if (scrollTop + height >= scrollHeight) {
        setElements((prevElements) => {
          const [first, ...rest] = prevElements;
          return [...rest, first];
        });
      }
    };
    if (isNotMobile) ref.current?.addEventListener("scroll", handleScroll);
    return () => {
      ref.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="if__items items-if" ref={ref}>
      {elements.map((element) => (
        <div
          key={element}
          className="items-if__item"
          style={
            elements[0] === element
              ? { opacity: 1 }
              : elements[1] === element
              ? { opacity: 0.5 }
              : { opacity: 0.1 }
          }
        >
          <h2 className="items-if__title title-less">{element}</h2>
        </div>
      ))}
    </div>
  );
};
export default IfItems;
