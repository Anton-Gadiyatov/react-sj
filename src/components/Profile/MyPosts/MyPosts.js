import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.postsData.map((post, id) => (
    <Post id={id} message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const addPostHandler = () => {
    const text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div className={styles.PostsBlock}>
      <h3>My posts</h3>
      <div>New post</div>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPostHandler}>Add Post</button>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
