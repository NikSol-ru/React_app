import React from "react";
import c from "./AddedMessage.module.css";

const AddedMessage = () => {
  const newMessageElement = React.createRef();

  const addMessage = () => {
    console.log(newMessageElement.current.value);
    newMessageElement.current.value = "";
  };

  return (
    <div className={c.inputMessage}>
      <div className={c.textareaWrap}>
        <textarea className={c.textarea} ref={newMessageElement}></textarea>
      </div>
      <button className={c.messageSend} onClick={addMessage}>
        Отправить сообщение
      </button>
    </div>
  );
};

export default AddedMessage;
