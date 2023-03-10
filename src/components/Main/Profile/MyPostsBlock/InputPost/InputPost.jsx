import React from "react";
import c from "./InputPost.module.css";

const InputPost = (props) => {
  const newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={c.inputPost}>
      <div className={c.textareaWrap}>
        <textarea className={c.textarea} ref={newPostElement}></textarea>
      </div>
      <button className={c.postSend} onClick={addPost}>
        Отправить
      </button>
    </div>
  );
};

export default InputPost;
