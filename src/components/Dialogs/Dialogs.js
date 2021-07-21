import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const messagesElements = props.state.messagesData.map( message => <Message id={message.id} message={message.message} />)
  const dialogsElements = props.state.dialogsData.map( dialog => <DialogItem id={dialog.id} name={dialog.name}  /> );

  const addMessageElement = React.createRef();

  const addMessagehandler = () => {
    const text = addMessageElement.current.value;
    alert(text);
  }
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        { dialogsElements }
      </div>
      <div className={styles.messages}>
       { messagesElements }
       <textarea ref={addMessageElement}></textarea>
       <button onClick={ addMessagehandler }>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
