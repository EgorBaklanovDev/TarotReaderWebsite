import Review from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "@/styles/Reviews.module.css";
import { RevealWrapper } from "next-reveal";
import Image1 from "@/public/img/image 9 (2).jpg";
import Image2 from "@/public/img/image 9 (3).jpg";
import Image3 from "@/public/img/image 9.jpg";
import Image4 from "@/public/img/image 9 (1).jpg";
import Image5 from "@/public/img/clientPhoto.jpg";

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <h2>Отзывы</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <RevealWrapper className="load-hidden" duration={1000} delay={300}>
            <Review
              name="Ильмира Уразгалиева"
              date="24 сен 2020"
              description="Случайно сюда зашла и решила оставить свой отзыв. Я всегда о вас вспоминаю только с радостью в душе. Я вас обожаю за вашу человечность, за теплоту, которую вы даёте, за энергию, за тот комфорт. Мне всегда с вами так легко и уютно общаться, вы как свет в конце туннеля. Обращалась к вам вся в слезах, когда думала, что все, конец, но после разговора с вами и вашего расклада - я была полна сил и энергии и знала, куда идти и зачем. Вы вселяли в меня надежду. Это бесподобно! Я ещё не встречала более светлого человека, чем вы. Это ваше призвание - помогать людям 💖 Желаю вам побольше добра и счастья."
              image={Image1}
            />
          </RevealWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Review
            name="Valeria Letzi"
            date="16 мар 2016"
            description="Не раз обращалась к Вере с просьбой посмотреть тот или иной вопрос или прояснить ситуацию с помощью расклада и всегда получала не только исчерпывающие ответы, но и сказанное сбывалось, даже когда на тот момент, не было даже предпосылок так думать. Мне нравится подход Веры в ее работе. Поэтому, когда мне надо посмотреть вопрос очень важный, всегда знаю, что вера именно тот таролог, к которому я обращусь. Верочка, благодарю вас за ваш труд и помощь! Успехов вам в работе и во всем!
            С уверенностью рекомендую Веру тем, кто хочет получить качество и возможность разобраться в ситуации!"
            image={Image2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            name="Ольга Петровна"
            date="25 июн 2017"
            description="Всем,добрый вечер!С первого обращения к Вере,поняла,что она грамотный таролог,отзывчивый человек и приятная в общении девушка,т.к.помимо расклада,Вера,своими словами может обьяснить ситуацию и поддержать добрым словом.Мне очень приятно обращаться к ней,поэтому буду продолжать держать связь и пользоваться ее советами.Вера,Вам,здоровья,сил,благополучия и понимающих и благодарных кверентов!Так что,ребята,обращайтесь и результат не заставит себя ждать.Всем,добра и удачи!!!👍😘🍀"
            image={Image4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            name="Оксана Нагорная"
            date="19 янв 2022"
            description="К Вере можно обратиться с любым вопросом, с тем что волнует вас больше всего на данный момент. С ней очень легко и просто, она очень добрая, отзывчивая, светлая✨✨✨ В раскладах всегда все точно, все по делу, и даже больше, всегда все объяснит, разъяснит, посоветует. Благодарю Вас за ваш труд ❤"
            image={Image3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            name="Татьяна Дорофеева"
            date="6 ноя 2017"
            description="Верочка! Обращаюсь к тебе за помощью и советом не раз. Всегда очень профессиональна, тактична и внимательна.. Расклады точны и всегда очень интересно ты их трактуешь.. Ты большая молодец! Желаю, чтобы всё, хорошее, что ты делаешь и будешь делать вернулось к тебе в многократном размере!"
            image={Image5}
          />
        </SwiperSlide>
      </Swiper>
      <a href="https://vk.com/topic-99306194_32873238">
        <button>больше отзывов</button>
      </a>
    </section>
  );
}
