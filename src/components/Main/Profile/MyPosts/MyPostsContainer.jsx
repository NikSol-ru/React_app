import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  const onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div>
      <MyPosts
        updateNewPostText={onPostChange}
        addPost={onAddPost}
        postsData={state.postsPage.postsData}
        newText={state.postsPage.newText}
      ></MyPosts>
    </div>
  );
};

export default MyPostsContainer;
