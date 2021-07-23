const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsPageReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.newMessageText;
      return state;
    }
    case SEND_MESSAGE: {
      const newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };
      if (state.newMessageText !== "") {
        state.messagesData.push(newMessage);
        state.newMessageText = "";
      }
      return state;
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text,
});

export default dialogsPageReducer;
