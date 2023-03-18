import { Swiper, SwiperSlide } from "swiper/react";
import "./Items.scss";
import ItemIntro, { imageAuto, imageWintal } from "../../../ItemIntro";
import HeaderItemIntro from "../../../ItemIntro/components/Header";
import ItemIntroBody from "../../../ItemIntro/components/Body";
import ItemIntroSub from "../../../ItemIntro/components/Body/Sub";
import ItemIntroSubBlock from "../../../ItemIntro/components/Body/Sub/Block";
import ItemIntroSubBot from "../../../ItemIntro/components/Body/Sub/BotSub";
import ItemIntroImage from "../../../ItemIntro/components/Image";
import ItemIntroSubInfo from "../../../ItemIntro/components/Body/Sub/Info";
import ItemIntroSubBotItem from "../../../ItemIntro/components/Body/Sub/BotSubItem";
const PortfolioItems = () => {
  return (
    <Swiper
      className="portfolio__items items-portfolio"
      loop
      slidesPerView={"auto"}
      spaceBetween={40}
    >
      <SwiperSlide className="items-portfolio__item">
        <div className="portfolio__image">
          <ItemIntroImage srcImage={imageAuto} />
        </div>
        <div className="portfolio__content">
          <ItemIntro>
            <HeaderItemIntro
              title="АвтоКомфорт"
              text="Автосервис, авто оборудование, климатическое оборудование, предпусковые подогреватели в Кирове."
            />
            <ItemIntroBody>
              <>
                <ItemIntroSub>
                  <ItemIntroSubBlock lightItem>
                    <ItemIntroSubInfo
                      text="в 3 раза снизили стоимость заявок"
                      title="234 ₽"
                    />
                  </ItemIntroSubBlock>
                  <ItemIntroSubBot>
                    <ItemIntroSubBotItem
                      title="Киров, Коми"
                      subTitle="Регион:"
                    />
                    <ItemIntroSubBotItem title="773" subTitle="Заявки" />
                  </ItemIntroSubBot>
                </ItemIntroSub>
                <ItemIntroSub>
                  <ItemIntroSubBlock lightItem>
                    <ItemIntroSubInfo
                      gradient
                      text="целевой трафик"
                      title="+300%"
                    />
                  </ItemIntroSubBlock>
                  <ItemIntroSubBot>
                    <ItemIntroSubBotItem
                      title="Длительность"
                      subTitle="за 6 месяцев"
                    />
                    <ItemIntroSubBotItem
                      title="Площадка"
                      subTitle="Количество заявок"
                    />
                  </ItemIntroSubBot>
                </ItemIntroSub>
              </>
            </ItemIntroBody>
          </ItemIntro>
        </div>
      </SwiperSlide>
      <SwiperSlide className="items-portfolio__item">
        <div className="portfolio__image">
          <ItemIntroImage srcImage={imageWintal} />
        </div>
        <div className="portfolio__content">
          <ItemIntro>
            <HeaderItemIntro
              title="Wintal"
              text="Производство окон полного цикла"
            />
            <ItemIntroBody>
              <>
                <ItemIntroSub>
                  <ItemIntroSubBlock lightItem>
                    <ItemIntroSubInfo
                      text="в 3 раза снизили стоимость заявок"
                      title="234 ₽"
                    />
                  </ItemIntroSubBlock>
                  <ItemIntroSubBot>
                    <ItemIntroSubBotItem
                      title="Киров, Москва"
                      subTitle="Регион:"
                    />
                  </ItemIntroSubBot>
                </ItemIntroSub>
                <ItemIntroSub>
                  <ItemIntroSubBlock lightItem>
                    <ItemIntroSubInfo
                      gradient
                      text="целевой трафик"
                      title="+300%"
                    />
                  </ItemIntroSubBlock>
                  <ItemIntroSubBot>
                    <ItemIntroSubBotItem
                      title="Рост в 5 раз"
                      subTitle="Количество заявок"
                    />
                  </ItemIntroSubBot>
                </ItemIntroSub>
              </>
            </ItemIntroBody>
          </ItemIntro>
        </div>
      </SwiperSlide>
      <SwiperSlide className="items-portfolio__item">
        <div className="portfolio__image">
          <ItemIntroImage srcImage={imageAuto} />
        </div>
        <div className="portfolio__content">
          <ItemIntro>
            <HeaderItemIntro
              title="АвтоКомфорт"
              text="Автосервис, авто оборудование, климатическое оборудование, предпусковые подогреватели в Кирове."
            />
            <ItemIntroBody>
              <>
                <ItemIntroSub>
                  <ItemIntroSubBlock lightItem>
                    <ItemIntroSubInfo
                      text="в 3 раза снизили стоимость заявок"
                      title="234 ₽"
                    />
                  </ItemIntroSubBlock>
                  <ItemIntroSubBot>
                    <ItemIntroSubBotItem
                      title="Киров, Коми"
                      subTitle="Регион:"
                    />
                    <ItemIntroSubBotItem title="773" subTitle="Заявки" />
                  </ItemIntroSubBot>
                </ItemIntroSub>
                <ItemIntroSub>
                  <ItemIntroSubBlock lightItem>
                    <ItemIntroSubInfo
                      gradient
                      text="целевой трафик"
                      title="+300%"
                    />
                  </ItemIntroSubBlock>
                  <ItemIntroSubBot>
                    <ItemIntroSubBotItem
                      title="Длительность"
                      subTitle="за 6 месяцев"
                    />
                    <ItemIntroSubBotItem
                      title="Площадка"
                      subTitle="Количество заявок"
                    />
                  </ItemIntroSubBot>
                </ItemIntroSub>
              </>
            </ItemIntroBody>
          </ItemIntro>
        </div>
      </SwiperSlide>
      <SwiperSlide className="items-portfolio__item">
        <div className="portfolio__image">
          <ItemIntroImage srcImage={imageWintal} />
        </div>
        <div className="portfolio__content">
          <ItemIntro>
            <HeaderItemIntro
              title="Wintal"
              text="Производство окон полного цикла"
            />
            <ItemIntroBody>
              <>
                <ItemIntroSub>
                  <ItemIntroSubBlock lightItem>
                    <ItemIntroSubInfo
                      text="в 3 раза снизили стоимость заявок"
                      title="234 ₽"
                    />
                  </ItemIntroSubBlock>
                  <ItemIntroSubBot>
                    <ItemIntroSubBotItem
                      title="Киров, Москва"
                      subTitle="Регион:"
                    />
                  </ItemIntroSubBot>
                </ItemIntroSub>
                <ItemIntroSub>
                  <ItemIntroSubBlock lightItem>
                    <ItemIntroSubInfo
                      gradient
                      text="целевой трафик"
                      title="+300%"
                    />
                  </ItemIntroSubBlock>
                  <ItemIntroSubBot>
                    <ItemIntroSubBotItem
                      title="Рост в 5 раз"
                      subTitle="Количество заявок"
                    />
                  </ItemIntroSubBot>
                </ItemIntroSub>
              </>
            </ItemIntroBody>
          </ItemIntro>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default PortfolioItems;
