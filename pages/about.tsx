import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Hero/Header";
import ExtendedAboutMe from "@/components/About me/ExtendedAboutMe";

export default function About() {
  return (
    <>
      <Head>
        <title>О Вере и Таро</title>
        <meta name="description" content="О Вере Гуде и Таро" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/WithBG.png" />
      </Head>
      <Header />
      <main>
        <ExtendedAboutMe />
        <Footer />
      </main>
    </>
  );
}
