import c from "./InputPost.module.css";

const InputPost = () => {
  return (
    <div className={c.inputPost}>
      <div>
        <textarea></textarea>
      </div>
      <button>Отправить</button>
    </div>
  );
};

export default InputPost;
