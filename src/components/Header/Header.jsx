import c from "./Header.module.css";

const Header = () => {
  return (
    <header className={c.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/600px-BMW_logo_%28gray%29.svg.png"
        alt="logo"
      ></img>
    </header>
  );
};

export default Header;
