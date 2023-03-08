import InputPost from "./InputPost/InputPost";
import Post from "./Post/Post";
import c from "./MyPostsBlock.module.css";

const postsData = [
  { id: 1, post: "Мой первый пост", likesCount: 5 },
  { id: 2, post: "Мой второй пост", likesCount: 12 },
  { id: 3, post: "Мой третий пост", likesCount: 16 },
];

const MyPosts = () => {
  return (
    <div className={c.myPosts}>
      <h2>Мои посты</h2>
      <InputPost></InputPost>
      {postsData.map((p) => (
        <Post id={p.id} post={p.post} like={p.likesCount}></Post>
      ))}
    </div>
  );
};

export default MyPosts;
