const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  dialogsData: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Valera" },
    { id: 6, name: "Kostya" },
  ],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "IT-Kamasutra" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ],
  newMessageText: "",
};

const dialogsPageReducer = (state = initialState, action) => {
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
