import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={styles.post}>
        <img
          className={styles.avatar}
          src="https://lh3.googleusercontent.com/proxy/8j9HVXFNFrXaLDZNkafiHesyTrtuyKz4QPlbwfBjrU3pcZ7VIPWH72-DiSRysWA7TNIYhZPtpbtzAEoI0sZE6dpT"
          alt="avatar"
        ></img>
        post 1
        <div>
          <span>LIKE</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
