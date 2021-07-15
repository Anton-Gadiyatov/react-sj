import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.nav}>
      <nav>
        <ul className={styles.items}>
          <li>
            <NavLink to="/profile" activeClassName={styles.activeLink}>Profile </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages </NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName={styles.activeLink}>News </NavLink>
          </li>
          <li>
            <NavLink to="/music" activeClassName={styles.activeLink}>Music </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName={styles.activeLink}>Settings </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
