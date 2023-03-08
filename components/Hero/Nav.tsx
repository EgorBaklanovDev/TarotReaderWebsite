import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import React, { useState } from "react";
import whatsapp from "@/public/img/icons8-whatsapp 1.svg";
import vk from "@/public/img/icons8-vk-com (1) 1.svg";
import Image from "next/image";

type Props = {
  width: number;
};

const Nav: React.FC<Props> = ({ width }) => {
  const [active, setActive] = useState(false);
  function activateHamburger() {
    setActive((prev) => {
      return !prev;
    });
  }

  return (
    <>
      {width > 768 ? (
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/about">Обо мне</Link>
            </li>
          </ul>
          <div className={styles.contactLinks}>
            <a className={styles.whatsapp} href="https://wa.me/79372369027">
              <Image src={whatsapp} alt="img" className={styles.img} priority />
              <span>Whatsapp</span>
            </a>
            <a className="vk" href="https://vk.com/vera_guda">
              <Image src={vk} alt="img" className={styles.img} priority />
              <span>VK</span>
            </a>
          </div>
        </nav>
      ) : (
        <nav className={styles.hamburgeNav} onClick={activateHamburger}>
          <div
            className={
              styles.offScreenMenu + " " + (active ? styles.active : "")
            }
          >
            <ul>
              <li>
                <Link href="/">Главная</Link>
              </li>
              <li>
                <Link href="/about">Обо мне</Link>
              </li>
              <li>
                <Link href="/services">Услуги</Link>
              </li>
            </ul>
            <div className={styles.contactLinks}>
              <a className={styles.whatsapp} href="#">
                <Image src={whatsapp} alt="img" className={styles.img} />
                <span>Whatsapp</span>
              </a>
              <a className="vk" href="https://vk.com/vera_guda">
                <Image src={vk} alt="img" className={styles.img} />
                <span>VK</span>
              </a>
            </div>
          </div>
          <div
            className={
              styles.hamburgerMenu + " " + (active ? styles.active : "")
            }
          >
            <div className={styles.hamBar + " " + styles.barTop}></div>
            <div className={styles.hamBar + " " + styles.barMid}></div>
            <div className={styles.hamBar + " " + styles.barBottom}></div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
