import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/state";

const MyPosts = (props) => {
  const postsElements = props.postsData.map((post, id) => (
    <Post id={id} message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const addPostHandler = () => {
    props.dispatch(addPostActionCreator());
  };

  const updatePostTextHandler = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={styles.PostsBlock}>
      <h3>My posts</h3>
      <div>New post</div>
      <div>
        <textarea
          ref={newPostElement}
          onChange={updatePostTextHandler}
          value={props.newPostText}
        ></textarea>
      </div>
      <div>
        <button onClick={addPostHandler}>Add Post</button>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
