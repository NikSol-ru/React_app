import c from "./InputPost.module.css";

const InputPost = () => {
  return (
    <div className={c.inputPost}>
      <div className={c.textareaWrap}>
        <textarea className={c.textarea}></textarea>
      </div>
      <button className={c.postSend}>Отправить</button>
    </div>
  );
};

export default InputPost;
