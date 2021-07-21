import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const messagesElements = props.state.messagesData.map( message => <Message id={message.id} message={message.message} />)
  const dialogsElements = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

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
