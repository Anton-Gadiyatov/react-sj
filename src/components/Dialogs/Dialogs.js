import React from "react";
import {
  updateNewMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogsPage-reducer";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const state = props.store.getState().dialogsPage;

  const messagesElements = state.messagesData.map((message) => (
    <Message id={message.id} message={message.message} />
  ));
  const dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));
  const newMessageText = state.newMessageText;

  const sendMessageHandler = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const newMessageChangeHandler = (event) => {
    const text = event.target.value;
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        {messagesElements}
        <div>
          <textarea
            value={newMessageText}
            placeholder="Enter your message"
            onChange={newMessageChangeHandler}
          ></textarea>
        </div>
        <div>
          <button onClick={sendMessageHandler}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
