const initialState = {
  friends: [
    { id: 1, avatar: "Vasya", name: "Kloun" },
    { id: 2, avatar: "Pasya", name: "Kloun" },
    { id: 3, avatar: "Dasya", name: "Kloun" },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
