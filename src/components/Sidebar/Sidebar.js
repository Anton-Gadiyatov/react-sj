import React from "react";
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
  <aside  className={styles.nav}>
    <nav>
      <ul className={styles.items}>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  </aside>
  )
};

export default Sidebar;
