import React from "react";
import {
  updateNewMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const newMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return <Dialogs newMessageChange={newMessageChange} sendMessage={sendMessage} dialogsPage={state}/>;
};

export default DialogsContainer;
