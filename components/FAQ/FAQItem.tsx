import React, { useState } from "react";
import styles from "@/styles/FAQItem.module.css";

export type FaqItem = {
  key: number;
  question: string;
  answer: string;
};

const FAQItem: React.FC<FaqItem> = ({ question, answer, key }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.faqItem + " " + (open ? styles.active : "")}
      onClick={() => setOpen((prev) => !prev)}
    >
      <h4 className={styles.faqTitle}>{question}</h4>
      <div className={styles.faqText}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
