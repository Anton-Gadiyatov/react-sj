import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={styles.main}>
      <ProfileInfo
        imgSrc="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        imAlt="bg-main"
      />
      <MyPosts postsData={props.postsData} />
    </main>
  );
};

export default Profile;
