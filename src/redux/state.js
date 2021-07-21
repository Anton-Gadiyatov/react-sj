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
  },
  sidebar: {
    friends: [
      {avatar: 'Vasya', name: 'Kloun'},
      {avatar: 'Pasya', name: 'Kloun'},
      {avatar: 'Dasya', name: 'Kloun'}
    ],
  },
};

export default state;
