import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We are learning React.</h1>
        <p>
          React is so cool!
        </p>
        <p>
          I like to watch the logo spin.
        </p>
        <ul>
          <li> My favorite color is green.</li>
          <li> I love fantasy books.</li>
          <li> I spend way to much time on tiktok.</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
