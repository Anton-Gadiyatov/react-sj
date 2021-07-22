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
    },
    profilePage: {
      postsData: [
        { id: 1, message: "hi, how are you?", likesCount: 10 },
        { id: 2, message: "it's my first post", likesCount: 20 },
      ],
      newPostText: "Kolumbus",
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
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: this._state.profilePage.postsData.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      if (this._state.profilePage.newPostText !== "") {
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
      }
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export default store;
window.store = store;
