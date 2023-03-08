import React from "react";
import { FaqItem } from "./FAQItem";
import FAQItem from "./FAQItem";
import styles from "@/styles/FAQSection.module.css";
import Image from "next/image";
import whatsapp from "@/public/img/icons8-whatsapp 1.svg";
import vk from "@/public/img/icons8-vk-com (1) 1.svg";
import { RevealWrapper } from "next-reveal";

interface Props {
  faqItems: FaqItem[];
}

const FAQSection: React.FC<Props> = ({ faqItems }) => {
  return (
    <section className={styles.faqsection}>
      <h2>FAQ</h2>
      {faqItems.map((item) => (
        <RevealWrapper
          className="load-hidden"
          duration={1000}
          delay={200 + (item.key - 1) * 100}
          key={item.key}
        >
          <FAQItem
            question={item.question}
            answer={item.answer}
            key={item.key}
          />
        </RevealWrapper>
      ))}
      <div className={styles.questions}>
        <h3>Остались вопросы? Пишите!</h3>
        <div>
          <a href="https://wa.me/79372369027">
            <Image
              src={whatsapp}
              alt="whatsapp"
              width={70}
              height={70}
              priority
            />
          </a>
          <a href="https://vk.com/vera_guda">
            <Image src={vk} alt="vk" width={70} height={70} priority />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
