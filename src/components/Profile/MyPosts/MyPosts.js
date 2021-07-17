import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const postsData = [
  {id: 1, message: "hi, how are you?", likesCount: 10},
  {id: 2, message: "it's my first post", likesCount: 20},
]

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
        <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
