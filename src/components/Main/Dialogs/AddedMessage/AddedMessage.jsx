import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/dialogs-reducer";
import c from "./AddedMessage.module.css";

const AddedMessage = (props) => {
  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator(newMessageElement.current.value));
    newMessageElement.current.value = "";
  };

  const onMessageChange = () => {
    props.dispatch(
      updateNewMessageTextActionCreator(newMessageElement.current.value)
    );
  };

  return (
    <div className={c.inputMessage}>
      <div className={c.textareaWrap}>
        <textarea
          value={props.newMessageText}
          className={c.textarea}
          ref={newMessageElement}
          onChange={onMessageChange}
        ></textarea>
      </div>
      <button className={c.messageSend} onClick={addMessage}>
        Отправить
      </button>
    </div>
  );
};

export default AddedMessage;
