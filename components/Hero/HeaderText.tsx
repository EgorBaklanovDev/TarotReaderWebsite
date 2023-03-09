import styles from "@/styles/HeaderText.module.css";
import Image from "next/image";
import heroImage from "@/public/img/image 1.png";

type Props = {
  width: number;
};

const HeaderText: React.FC<Props> = ({ width }) => {
  return (
    <div className={styles.headerText}>
      <h1>
        Таролог
        <br />
        Вера Гуда
      </h1>
      <p>Расклады на картах Таро и Ленорман</p>
      <a href="https://vk.com/vera_guda">
        <button>связаться</button>
      </a>
    </div>
  );
};

export default HeaderText;
