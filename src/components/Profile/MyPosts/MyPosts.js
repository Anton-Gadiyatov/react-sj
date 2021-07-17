import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.PostsBlock}>
      <h3>My posts</h3>
      <div>New post</div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add Post</button>
      </div>
      <div className={styles.posts}>
        <Post message="hi, how are you?" count="10" />
        <Post message="it's my first post" count="20" />
      </div>
    </div>
  );
};

export default MyPosts;
