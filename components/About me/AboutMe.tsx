import styles from "@/styles/AboutMe.module.css";
import Image from "next/image";
import VeraImg from "@/public/img/image 5.png";
import WhyExactlyMe from "./WhyExactlyMe";
import { RevealWrapper } from "next-reveal";

export default function AboutMe() {
  return (
    <>
      <section className={styles.wrapper}>
        <h2>Обо мне</h2>
        <div>
          <RevealWrapper className="load-hidden" duration={1000}>
            <p>
              Я Вера Гуда, профессиональный таролог, помогающий людям обрести
              ясность, направление и силу в жизни. Я использую свой опыт в
              тарологии и картах Таро, чтобы помочь вам решить ваши проблемы и
              найти ответы на ваши вопросы. Мои сеансы Таро конфиденциальны,
              персонализированы и адаптированы к вашим потребностям и
              предпочтениям. Если у вас есть проблемы в отношениях, карьере или
              других сферах жизни, пожалуйста, свяжитесь со мной, и я помогу вам
              найти путь вперед.
            </p>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" duration={1000}>
            <Image src={VeraImg} alt="VeraGuda" />
          </RevealWrapper>
        </div>
        <a href="#">
          <button>Подробнее</button>
        </a>
      </section>
      <WhyExactlyMe />
    </>
  );
}
