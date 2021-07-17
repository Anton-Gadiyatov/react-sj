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

const dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

const messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "IT-Kamasutra" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
];

const messagesElements = messagesData.map( message => <Message id={message.id} message={message.message} />)

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        { dialogsElements }
      </div>
      <div className={styles.messages}>
       { messagesElements }
      </div>
    </div>
  );
};

export default Dialogs;
