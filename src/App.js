import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path="/dialogs">
            <Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData} />
          </Route>
          <Route path="/profile">
            <Profile postsData={props.postData}/>
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
