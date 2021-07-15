import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <div className={styles.dialog + " " + styles.active}>Dimych</div>
        <div className={styles.dialog}>Andrey</div>
        <div className={styles.dialog}>Sveta</div>
        <div className={styles.dialog}>Sasha</div>
        <div className={styles.dialog}>Valera</div>
        <div className={styles.dialog}>Kostya</div>
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
