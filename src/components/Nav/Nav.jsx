import { NavLink } from "react-router-dom";
import c from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={c.nav}>
      <NavLink
        to="/profile"
        className={(navData) => (navData.isActive ? c.active : c.item)}
      >
        "Профиль"
      </NavLink>
      <NavLink
        to="/dialogs"
        className={(navData) => (navData.isActive ? c.active : c.item)}
      >
        "Сообщения"
      </NavLink>
      <NavLink
        to="/news"
        className={(navData) => (navData.isActive ? c.active : c.item)}
      >
        "Новости"
      </NavLink>
      <NavLink
        to="/music"
        className={(navData) => (navData.isActive ? c.active : c.item)}
      >
        "Музыка"
      </NavLink>
      <NavLink
        to="/setting"
        className={(navData) => (navData.isActive ? c.active : c.item)}
      >
        "Настройки"
      </NavLink>
    </nav>
  );
};

export default Nav;
