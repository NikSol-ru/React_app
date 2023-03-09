import { NavLink } from "react-router-dom";
import c from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={c.dialogs_items}>
      <NavLink className={c.dialog} to={`/dialogs/${props.userId}`}>
        {props.userName}
      </NavLink>
    </div>
  );
};

export default DialogItem;
