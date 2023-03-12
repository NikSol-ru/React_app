import React from "react";
import c from "./InputPost.module.css";

const InputPost = (props) => {
  const newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPostText("");
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={c.inputPost}>
      <div className={c.textareaWrap}>
        <textarea
          className={c.textarea}
          ref={newPostElement}
          onInput={onPostChange}
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
