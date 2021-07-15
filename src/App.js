import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">Dome</a>
      <a href="#">Gome</a>
    </div>
  );
};

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
};

export default App;
