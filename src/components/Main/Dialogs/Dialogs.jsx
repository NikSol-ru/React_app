import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div>
      <NavLink to={`/dialogs/${props.userId}`}>{props.userName}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_items}>
        <DialogItem userId="1" userName="Коля"></DialogItem>
        <DialogItem userId="2" userName="Гуля"></DialogItem>
        <DialogItem userId="3" userName="Петрович"></DialogItem>
        <DialogItem userId="4" userName="Артем"></DialogItem>
        <DialogItem userId="5" userName="Туман"></DialogItem>
      </div>
      <div className={c.messages}>
        <Message message="Привет!"></Message>
        <Message message="Как дела?"></Message>
        <Message message="Все хорошо)"></Message>
        <Message message="А у тебя?"></Message>
      </div>
    </div>
  );
};

export default Dialogs;
