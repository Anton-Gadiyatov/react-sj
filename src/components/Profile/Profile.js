import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <main className={styles.main}>
      <div>
        <img className={styles.image}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="bg-main"
        ></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
