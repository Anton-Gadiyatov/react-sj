import React from "react";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v286batch2-aew-company-logo-22_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=311ef304bb090c4ba4f0ad95fad47fbf"
        alt="header backgroundimage"
      ></img>
    </header>
  );
};

export default Header;
