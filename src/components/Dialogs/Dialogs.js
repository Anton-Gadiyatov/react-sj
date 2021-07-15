import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Valera" id="5" />
        <DialogItem name="Kostya" id="6" />
      </div>
      <div className={styles.messages}>
        <Message message="Hi" />
        <Message message="Yo" />
        <Message message="IT-Kamasutra" />
      </div>
    </div>
  );
};

export default Dialogs;
