import s from "./Link.module.css";

const Link = (props) => {
  return (
    <a className={s.link} href={props.href}>
      {props.link}
    </a>
  );
};

export default Link;
