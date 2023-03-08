import useWindowWidth from "../hooks/useWindowWidth";
import Nav from "./Nav";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const width = useWindowWidth();

  return (
    <header className={styles.header}>
      <Nav width={width} />
    </header>
  );
}
