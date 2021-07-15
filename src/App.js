import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <main className="main">
        <div>
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="bg-main"
          ></img>
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/proxy/8j9HVXFNFrXaLDZNkafiHesyTrtuyKz4QPlbwfBjrU3pcZ7VIPWH72-DiSRysWA7TNIYhZPtpbtzAEoI0sZE6dpT"
            alt="avatar"
          ></img>
        </div>
        <div>ava + description</div>
        <div>
          My post
          <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
