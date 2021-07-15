import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/1" activeClassName={styles.active}> Dimych</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/2" activeClassName={styles.active}> Andrey</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/3" activeClassName={styles.active} > Sveta</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/4" activeClassName={styles.active}> Sasha</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/5" activeClassName={styles.active}> Valera</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/6" activeClassName={styles.active}> Kostya</NavLink>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>Yo</div>
        <div className={styles.message}>Kamasutra-it</div>
      </div>
    </div>
  );
};

export default Dialogs;
