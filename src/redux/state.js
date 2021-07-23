import dialogsPageReducer from "./dialogsPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      postsData: [
        { id: 1, message: "hi, how are you?", likesCount: 10 },
        { id: 2, message: "it's my first post", likesCount: 20 },
      ],
      newPostText: "",
    },
    sidebar: {
      friends: [
        { id: 1, avatar: "Vasya", name: "Kloun" },
        { id: 2, avatar: "Pasya", name: "Kloun" },
        { id: 3, avatar: "Dasya", name: "Kloun" },
      ],
    },
  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsPageReducer(
      this._state.dialogsPage,
      action
    );
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
