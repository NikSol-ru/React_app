import InputPost from "./InputPost/InputPost";
import Post from "./Post/Post";
import c from "./MyPostsBlock.module.css";

const MyPosts = (props) => {
  return (
    <div className={c.myPosts}>
      <h2>Мои посты</h2>
      <InputPost newText={props.newText} dispatch={props.dispatch}></InputPost>
      {props.postsData.map((p) => (
        <Post id={p.id} post={p.post} like={p.likesCount}></Post>
      ))}
    </div>
  );
};

export default MyPosts;
