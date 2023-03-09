import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.post}>
      <p>
        {props.post}.<br />
        Число лайков: {props.like}
      </p>
    </div>
  );
};

export default Post;
