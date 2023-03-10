import React from "react";
import c from "./InputPost.module.css";

const InputPost = () => {
  const newPostElement = React.createRef();

  const addPost = () => {
    console.log(newPostElement.current.value);
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
