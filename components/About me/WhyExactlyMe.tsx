import Card from "../Card";
import styles from "@/styles/WhyExactlyMe.module.css";
import { RevealWrapper } from "next-reveal";

export default function WhyExactlyMe() {
  return (
    <div className={styles.sectionWrapper}>
      <h2>Почему именно я</h2>
      <div>
        <RevealWrapper className="load-hidden" duration={1000} delay={200}>
          <Card
            night={true}
            title="Более 7 лет опыта"
            description="Я имеею более 7-летний опыт работы с картами Таро и помогла многим людям получить ответы на свои вопросы и руководство в жизни."
            image="/img/icons8-experience-64 1.svg"
          />
        </RevealWrapper>
        <RevealWrapper className="load-hidden" duration={1000} delay={300}>
          <Card
            night={true}
            title="Подход"
            description="Я использую свою интуицию, эмпатию и глубокое понимание Таро, чтобы помочь моим клиентам принимать важные решения и двигаться вперед в своей жизни."
            image="/img/Group.svg"
          />
        </RevealWrapper>
        <RevealWrapper className="load-hidden" duration={1000} delay={400}>
          <Card
            night={true}
            title="Этика"
            description="Я отношесь к своим клиентам с уважением и интегритетом и гарантирую полную конфиденциальность и приватность для всех своих клиентов."
            image="/img/Group (1).svg"
          />
        </RevealWrapper>
        <RevealWrapper className="load-hidden" duration={1000} delay={500}>
          <Card
            night={true}
            title="Репутация"
            description="У меня высокая репутация в своей области и множество положительных отзывов от своих клиентов."
            image="/img/icons8-connectivity-and-help-50 1.svg"
          />
        </RevealWrapper>
      </div>
    </div>
  );
}
