import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";

const MyPostContainer = (props) => {
  const state = props.store.getState();

  const updatePostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      updatePostText={updatePostText}
      addPost={addPost}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostContainer;
