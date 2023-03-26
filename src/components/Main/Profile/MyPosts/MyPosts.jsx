import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  };
  const onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value);
  };

  return (
    <div className={c.inputPost}>
      <div className={c.textareaWrap}>
        <textarea
          className={c.textarea}
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
        ></textarea>
        <button className={c.postSend} onClick={addPost}>
          Отправить
        </button>
      </div>
      <div className={c.myPosts}>
        <h2>Мои посты</h2>
        {props.postsData.map((p) => (
          <Post id={p.id} key={p.id} post={p.post} like={p.likesCount}></Post>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
