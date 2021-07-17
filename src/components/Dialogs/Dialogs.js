import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const dialogsData = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Valera" },
  { id: 6, name: "Kostya" },
];

const messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "IT-Kamasutra" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
];

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
      </div>
      <div className={styles.messages}>
        <Message id={messagesData[0].id} message={messagesData[0].message} />
        <Message id={messagesData[1].id} message={messagesData[1].message} />
        <Message id={messagesData[2].id} message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
