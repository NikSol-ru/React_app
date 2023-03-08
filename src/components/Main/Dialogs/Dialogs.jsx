import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div>
      <NavLink className={c.dialog} to={`/dialogs/${props.userId}`}>
        {props.userName}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div>{props.message}</div>;
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, userName: "Коля" },
    { id: 2, userName: "Гуля" },
    { id: 3, userName: "Петрович" },
    { id: 4, userName: "Артем" },
    { id: 5, userName: "Туман" },
  ];

  let messagesData = [
    { id: 1, message: "Привет!" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Все хорошо)" },
    { id: 4, message: "А у тебя?" },
  ];

  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_items}>
        <h2>Диалоги</h2>
        {dialogsData.map((item) => (
          <DialogItem userId={item.id} userName={item.userName}></DialogItem>
        ))}
      </div>
      <div className={c.messages}>
        {messagesData.map((item) => (
          <Message message={item.message}></Message>
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
