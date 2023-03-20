import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../../redux/state";
import c from "./InputPost.module.css";

const InputPost = (props) => {
  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    props.dispatch(
      updateNewPostTextActionCreator(newPostElement.current.value)
    );
  };

  return (
    <div className={c.inputPost}>
      <div className={c.textareaWrap}>
        <textarea
          className={c.textarea}
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newText}
        ></textarea>
      </div>
      <button className={c.postSend} onClick={addPost}>
        Отправить
      </button>
    </div>
  );
};

export default InputPost;
