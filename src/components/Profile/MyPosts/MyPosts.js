import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <textarea></textarea>
      <button>Add Post</button>
      <div>
        <Post message="hi, how are you?"/>
        <Post message="it's my first post"/>
      </div>
    </div>
  );
};

export default MyPosts;
