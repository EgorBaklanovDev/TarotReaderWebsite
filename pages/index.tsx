import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About me/AboutMe";
import HowItHappens from "@/components/HowItHappens";
import Reviews from "@/components/Reviews/Reviews";
import FAQSection from "@/components/FAQ/FAQSection";
import { FaqItem } from "@/components/FAQ/FAQItem";
import Footer from "@/components/Footer";

const faqItems: FaqItem[] = [
  {
    key: 1,
    question: "Как долго вы делаете расклад?",
    answer:
      "Зависит от загруженности и размера расклада. Чаще всего в течение суток, иногда 2 дня.",
  },
  {
    key: 2,
    question: "Какие способы оплаты вы предоставляете?",
    answer: "На карту Сбербанка, Тинкофа. А также Юmoney.",
  },
  {
    key: 3,
    question: "В каком формате будет расклад?",
    answer: "В письменном.",
  },
  {
    key: 4,
    question: "Кто-то увидит мои фотографии, другую личную информацию?",
    answer: "Конечно нет. Не переживайте. Всё происходит конфиденциально.",
  },
  {
    key: 5,
    question: "Какова стоимость услуг?",
    answer:
      "Все зависит от размера, сложности расклада и количества потраченного времени. В общем, диапазон цен от 300р до 2000р в самых крайних случаях. Обычно это 500-600р за средний по величине расклад.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Таролог Вера Гуда | Расклады на картах Таро</title>
        <meta
          name="description"
          content="Купить или заказать расклады на картах Таро и Ленорман у таролога Веры Гуды"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/WithBG.png" />
      </Head>
      <Hero />
      <main>
        <AboutMe />
        <HowItHappens />
        <Reviews />
        <FAQSection faqItems={faqItems} />
        <Footer />
      </main>
    </>
  );
}
