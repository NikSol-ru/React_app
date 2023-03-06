import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_items}>
        <h2 className={c.dialogs_header}>Диалоги</h2>
        <div className={c.dialog}>
          <NavLink to="/dialogs/1">Коля</NavLink>
        </div>
        <div className={`${c.dialog} ${c.active}`}>
          <NavLink to="/dialogs/2">Гуля</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/3">Петрович</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/4">Артем</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/5">Туман</NavLink>
        </div>
      </div>
      <div className={c.messages}>
        <div className={c.message}>Привет!</div>
        <div className={c.message}>Как дела?</div>
        <div className={c.message}>Все хорошо)</div>
        <div className={c.message}>А у тебя?</div>
      </div>
    </div>
  );
};

export default Dialogs;
