import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddedMessage from "./AddedMessage/AddedMessage";
import c from "./Dialogs.module.css";

const Dialogs = (props) => {
  console.log(props);
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_items}>
        <h2 className={c.dialogs_header}>Диалоги</h2>
        {props.dialogsData.map((item) => (
          <DialogItem userId={item.id} userName={item.userName}></DialogItem>
        ))}
      </div>
      <div className={c.messages}>
        {props.messagesData.map((item) => (
          <Message message={item.message}></Message>
        ))}
        <AddedMessage
          newMessageText={props.newMessageText}
          addMessage={props.addMessage}
          updateNewMessageText={props.updateNewMessageText}
        ></AddedMessage>
      </div>
    </div>
  );
};

export default Dialogs;
