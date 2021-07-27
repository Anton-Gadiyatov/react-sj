import React from "react";
import StoreContext from "../../../StoreContext";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";

const MyPostContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const updatePostText = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        return (
          <MyPosts
            updatePostText={updatePostText}
            addPost={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostContainer;
