import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.post}>
      <p>
        {props.post}. Число лайков: {props.like}
      </p>
    </div>
  );
};

export default Post;
