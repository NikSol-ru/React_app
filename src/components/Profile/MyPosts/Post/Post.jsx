import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.circle}></div>
      <p className={s.post}>
        {props.message} Лайки: {props.like}
      </p>
    </div>
  );
};

export default Post;
