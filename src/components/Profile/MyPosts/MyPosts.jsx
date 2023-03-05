import Post from "./Post/Post";
import s from "./Myposts.module.css";

const data = {
  message: ["Привет! Как дела?", "Все хорошо!"],
  like: [15, 20],
};

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <div className={s.myPost}>
        <h4>My Post</h4>
        <textarea name="myPost" id="myPost" cols="30" rows="7"></textarea>
        <button>Submit</button>
      </div>
      <Post message={data.message[0]} like={data.like[0]}></Post>
      <Post message={data.message[1]} like={data.like[1]}></Post>
    </div>
  );
};

export default MyPosts;
