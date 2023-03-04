import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a href="#c">Profile</a>
      </div>
      <div>
        <a href="#c">Message</a>
      </div>
      <div>
        <a href="#c">News</a>
      </div>
      <div>
        <a href="#c">Music</a>
      </div>
      <div>
        <a href="#c">Setting</a>
      </div>
    </nav>
  );
};

export default Nav;
