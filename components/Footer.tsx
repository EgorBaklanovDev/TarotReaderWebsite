import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/about">Обо мне</Link>
          </li>
          <li>
            <a href="https://vk.com/taro_astro_sovet">Группа ВК</a>
          </li>
        </ul>
      </nav>
      <p>&copy; 2023</p>
      <style jsx>{`
        footer {
          max-width: 100vw;
          padding: 2rem 2.5%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          border-top: 1px solid var(--accent-color);
        }
        footer ul {
          display: flex;
          justify-content: space-between;
        }
        footer ul li {
          margin-right: 2rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
