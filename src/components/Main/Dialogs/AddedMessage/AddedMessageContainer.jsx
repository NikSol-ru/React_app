import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/dialogs-reducer";
import AddedMessage from "./AddedMessage";

const AddedMessageContainer = (props) => {
  const data = props.store.getState();

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const onMessageChange = (message) => {
    props.store.dispatch(updateNewMessageTextActionCreator(message));
  };

  return (
    <AddedMessage
      addMessage={addMessage}
      updateNewMessageText={onMessageChange}
      newMessageText={data.dialogsPage.newMessageText}
    ></AddedMessage>
  );
};

export default AddedMessageContainer;
