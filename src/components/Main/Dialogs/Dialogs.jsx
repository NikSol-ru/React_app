import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddedMessageContainer from "./AddedMessage/AddedMessageContainer";
import c from "./Dialogs.module.css";

const Dialogs = (props) => {
  const data = props.store.getState();
  console.log(data);
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_items}>
        <h2 className={c.dialogs_header}>Диалоги</h2>
        {data.dialogsPage.dialogsData.map((item) => (
          <DialogItem userId={item.id} userName={item.userName}></DialogItem>
        ))}
      </div>
      <div className={c.messages}>
        {data.dialogsPage.messagesData.map((item) => (
          <Message message={item.message}></Message>
        ))}
        <AddedMessageContainer store={props.store}></AddedMessageContainer>
      </div>
    </div>
  );
};

export default Dialogs;
