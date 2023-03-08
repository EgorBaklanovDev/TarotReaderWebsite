import styles from "@/styles/HowItHappens.module.css";
import Card from "./Card";
import { RevealWrapper } from "next-reveal";

export default function HowItHappens() {
  return (
    <section className={styles.sectionWrapper}>
      <h2>Как происходит консультация</h2>
      <div>
        <RevealWrapper className="load-hidden" duration={1000} delay={200}>
          <Card
            title="1. Обращение"
            description="Вы связываетесь со мной в соц. сетях."
            image="/img/Group 4.svg"
            night={false}
          />
        </RevealWrapper>
        <RevealWrapper className="load-hidden" duration={1000} delay={300}>
          <Card
            title="2. Обсуждение"
            description="Мы обсуждаем ваше проблему, вопрос. Вы одобряете тот или иной расклад по выбору."
            image="/img/discussion-square-svgrepo-com 1.svg"
            night={false}
          />
        </RevealWrapper>
        <RevealWrapper className="load-hidden" duration={1000} delay={400}>
          <Card
            title="3. Оплата"
            description="Вы оплачиваете расклад. Я приступаю к работе"
            image="/img/38 credit card.svg"
            night={false}
          />
        </RevealWrapper>
        <RevealWrapper className="load-hidden" duration={1000} delay={500}>
          <Card
            title="4. Результат"
            description="Вы получаете расклад в письменном виде. Вы можете задать допольнительные вопросы по раскладу."
            image="/img/Vector.svg"
            night={false}
          />
        </RevealWrapper>
      </div>
    </section>
  );
}
