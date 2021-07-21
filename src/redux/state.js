import rerenderEntireTree from "./../render";

const state = {
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
    newPostText: 'Kolumbus',
  },
  sidebar: {
    friends: [
      { id: 1, avatar: "Vasya", name: "Kloun" },
      { id: 2, avatar: "Pasya", name: "Kloun" },
      { id: 3, avatar: "Dasya", name: "Kloun" },
    ],
  },
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}


export const addPost = () => {
  const newPost = {
    id: state.profilePage.postsData.length + 1,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export default state;
