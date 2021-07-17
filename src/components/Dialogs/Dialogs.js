import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const dialogsData = [
  { id: 1, name: 'Dimych'},
  { id: 2, name: 'Andrey'},
  { id: 3, name: 'Sveta'},
  { id: 4, name: 'Sasha'},
  { id: 5, name: 'Valera'},
  { id: 6, name: 'Kostya'},
]

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
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
