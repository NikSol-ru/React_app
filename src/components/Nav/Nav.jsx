import Link from "./Link/Link";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <Link href="www.google.ru" link="Профиль"></Link>
      <Link href="#c" link="Сообщения"></Link>
      <Link href="#c" link="Новости"></Link>
      <Link href="#c" link="Музыка"></Link>
      <Link href="#c" link="Настройки"></Link>
    </nav>
  );
};

export default Nav;
