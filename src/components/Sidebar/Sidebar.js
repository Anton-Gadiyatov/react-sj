import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.nav}>
      <nav>
        <ul className={styles.items}>
          <li>
            <Link to="/profile">Profile </Link>
          </li>
          <li>
            <Link to="/messages">Messages </Link>
          </li>
          <li>
            <Link to="/news">News </Link>
          </li>
          <li>
            <Link to="/music">Music </Link>
          </li>
          <li>
            <Link to="/settings">Settings </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
