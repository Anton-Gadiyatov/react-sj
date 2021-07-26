import { combineReducers, createStore } from "redux";
import dialogsPageReducer from "./dialogsPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import sidebarReducer from "./sidebar-reducer";


const reducers = combineReducers({
  dialogsPage: dialogsPageReducer,
  profilePage: profilePageReducer,
  sidebar: sidebarReducer,
})

const store = createStore(reducers);

export default store;
