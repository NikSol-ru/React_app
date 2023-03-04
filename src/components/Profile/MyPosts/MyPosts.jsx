import Post from "./Post/Post";
import s from "./Myposts.module.css";

const data1 = {
  message: "Привет! Как дела?",
  like: 15,
};
const data2 = {
  message: "Все хорошо!",
  like: 20,
};

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <div className={s.myPost}>
        <h4>My Post</h4>
        <textarea name="myPost" id="myPost" cols="30" rows="7"></textarea>
        <button>Submit</button>
      </div>
      <Post message={data1.message} like={data1.like}></Post>
      <Post message={data2.message} like={data2.like}></Post>
    </div>
  );
};

export default MyPosts;
