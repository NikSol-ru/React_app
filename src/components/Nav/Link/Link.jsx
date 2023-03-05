import c from "./Link.module.css";

const Link = (props) => {
  return (
    <a className={c.link} href={props.href}>
      {props.link}
    </a>
  );
};

export default Link;
