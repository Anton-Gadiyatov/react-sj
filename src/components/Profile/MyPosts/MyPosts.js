import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const postsData = [
  {id: 1, message: "hi, how are you?", likesCount: 10},
  {id: 2, message: "it's my first post", likesCount: 20},
]

const postsElements = postsData.map( post => <Post id={post.id} message={post.message} likesCount={post.likesCount} />)

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
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
