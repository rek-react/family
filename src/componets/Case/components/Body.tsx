import ItemIntro, {
  imageAuto,
  imageWintal,
  imageCoffee,
} from "../../ItemIntro";
import HeaderItemIntro from "../../ItemIntro/components/Header";
import ItemIntroBody from "../../ItemIntro/components/Body";
import ItemIntroSub from "../../ItemIntro/components/Body/Sub";
import ItemIntroSubBlock from "../../ItemIntro/components/Body/Sub/Block";
import ItemIntroSubList from "../../ItemIntro/components/Body/Sub/List";
import ItemIntroSubBot from "../../ItemIntro/components/Body/Sub/BotSub";
import FooterItemIntro from "../../ItemIntro/components/Footer";
import ItemIntroSubBotItem from "../../ItemIntro/components/Body/Sub/BotSubItem";
import ItemIntroImage from "../../ItemIntro/components/Image";
const CaseBody = () => {
  return (
    <div className="case__body">
      <div className="case__row case-body">
        <div className="case__col case-col">
          <ItemIntro>
            <HeaderItemIntro
              title="АвтоКомфорт"
              text="Автосервис, авто оборудование, климатическое оборудование, предпусковые подогреватели в Кирове."
            />
            <ItemIntroBody>
              <>
                <ItemIntroSub>
                  <ItemIntroSubBlock>
                    <ItemIntroSubList
                      application="773"
                      label="За 6 месяцев"
                      price="700"
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
                  <ItemIntroSubBlock>
                    <ItemIntroSubList
                      was="30"
                      label="Заявок в месяц"
                      became="90"
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
            <FooterItemIntro link="Хочу так же" />
          </ItemIntro>
        </div>
        <div className="case__col case-col">
          <div className="case__image">
            <ItemIntroImage srcImage={imageAuto} />
          </div>
        </div>
      </div>
      <div className="case__row case-body">
        <div className="case__col case-col">
          <ItemIntro>
            <HeaderItemIntro
              title="Wintal"
              text="Производство окон полного цикла"
            />
            <ItemIntroBody>
              <>
                <ItemIntroSub>
                  <ItemIntroSubBlock>
                    <ItemIntroSubList
                      label="За 6 месяцев"
                      application="1 268"
                      price="700"
                    />
                  </ItemIntroSubBlock>
                  <ItemIntroSubBot>
                    <ItemIntroSubBotItem
                      title="Кировская область"
                      subTitle="Регион:"
                    />
                  </ItemIntroSubBot>
                </ItemIntroSub>
                <ItemIntroSub>
                  <ItemIntroSubBlock>
                    <ItemIntroSubList
                      was="123"
                      became="615"
                      label="Заявок в месяц"
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
            <FooterItemIntro link="Хочу так же" />
          </ItemIntro>
        </div>
        <div className="case__col case-col">
          <div className="case__image">
            <ItemIntroImage srcImage={imageWintal} />
          </div>
        </div>
      </div>
      <div className="case__row case-body">
        <div className="case__col case-col">
          <ItemIntro>
            <HeaderItemIntro
              title="Fresh Coffee"
              text="Обслуживание кофемашин и кофеварок"
            />
            <ItemIntroBody>
              <>
                <ItemIntroSub>
                  <ItemIntroSubBlock>
                    <ItemIntroSubList
                      application="4 136"
                      label="За 6 месяцев"
                      price="450"
                    />
                  </ItemIntroSubBlock>
                  <ItemIntroSubBot>
                    <ItemIntroSubBotItem title="Киров" subTitle="Регион:" />
                  </ItemIntroSubBot>
                </ItemIntroSub>
                <ItemIntroSub>
                  <ItemIntroSubBlock>
                    <ItemIntroSubList
                      was="10"
                      label="Заявок в месяц"
                      became="120"
                    />
                  </ItemIntroSubBlock>
                  <ItemIntroSubBot>
                    <ItemIntroSubBotItem
                      title="Рост в 12 раз"
                      subTitle="Количество заявок"
                    />
                  </ItemIntroSubBot>
                </ItemIntroSub>
              </>
            </ItemIntroBody>
            <FooterItemIntro link="Хочу так же" />
          </ItemIntro>
        </div>
        <div className="case__col case-col">
          <div className="case__image">
            <ItemIntroImage srcImage={imageCoffee} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseBody;
