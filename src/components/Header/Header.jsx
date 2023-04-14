import { NavLink } from "react-router-dom";
import c from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={c.header}>
      <img
        className={c.logo}
        src="https://www.advgazeta.ru/upload/iblock/bc4/novaya_zhizn_dlya_polzovateley_sotsialnykh_setey_1.jpg"
        alt="logo"
      ></img>
      <div className={c.authBlock}>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink className={c.link} to="/login">
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
