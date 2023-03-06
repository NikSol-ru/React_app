import c from "./Header.module.css";

const Header = () => {
  return (
    <header className={c.header}>
      <img
        className={c.logo}
        src="https://www.advgazeta.ru/upload/iblock/bc4/novaya_zhizn_dlya_polzovateley_sotsialnykh_setey_1.jpg"
        alt="logo"
      ></img>
    </header>
  );
};

export default Header;
