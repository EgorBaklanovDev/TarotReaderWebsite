import Header from "./Header";
import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import HeaderText from "./HeaderText";
import heroImage from "@/public/img/image 1.png";
import useWindowWidth from "../hooks/useWindowWidth";
import { RevealWrapper } from "next-reveal";

export default function Hero() {
  const width = useWindowWidth();

  return (
    <>
      <div className={styles.hero}>
        <Header />
        <div className={styles.heroWrapper}>
          {width! > 1000 ? (
            <RevealWrapper className="load-hiddenn" duration={1000} delay={200}>
              <div className={styles.imgContainer}>
                <Image
                  src={heroImage}
                  alt="tarot card"
                  className={styles.heroImage}
                  priority
                />
                <Image
                  src={heroImage}
                  alt="tarot card"
                  className={styles.heroImage}
                  priority
                />
                <Image
                  src={heroImage}
                  alt="tarot card"
                  className={styles.heroImage}
                  priority
                />
                <Image
                  src={heroImage}
                  alt="tarot card"
                  className={styles.heroImage}
                  priority
                />
              </div>
            </RevealWrapper>
          ) : width! > 768 ? (
            <RevealWrapper className="load-hiddenn" duration={1000} delay={300}>
              <Image
                src={heroImage}
                alt="tarot card"
                className={styles.heroImage}
                priority
              />
            </RevealWrapper>
          ) : (
            ""
          )}
          <RevealWrapper className="load-hiddenn" duration={1000} delay={200}>
            <HeaderText width={width} />
          </RevealWrapper>
        </div>
        <div className={styles.arrows}>
          <div className={styles.downArrow}></div>
          <div className={styles.downArrow}></div>
        </div>
        <div className={styles.box}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}
