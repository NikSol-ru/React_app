import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.post}>
      <p className={c.postId}>{props.id}</p>
      <p className={c.postText}>{props.post}</p>
      <p className={c.postLike}>Число лайков: {props.like}</p>
    </div>
  );
};

export default Post;
