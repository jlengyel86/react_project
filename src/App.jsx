//import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import FilmsList from "./components/filmsList";

//function App() {
 // return (
  //  <div className="App">
  //    <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
   //     <h1>We are learning React.</h1>
    //    <p>
    //      React is so cool!
    //    </p>
    //    <p>
    //      I like to watch the logo spin.
     //   </p>
    //    <ul>
     //     <li> My favorite color is green.</li>
    //      <li> I love fantasy books.</li>
     //     <li> I spend way to much time on tiktok.</li>
     //   </ul>
    //    <a
     //     className="App-link"
     //     href="https://reactjs.org"
     //     target="_blank"
     //     rel="noopener noreferrer"
     //   >
    //      Learn React
  //  </a>
  //    </header>
  //  </div>
  //);
//}

//export default App;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Ready", "Set", "GO"],
      text: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    let newList = [...this.state.list, this.state.text];
    this.setState({ list: newList, text: "" });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <form onSubmit={this.onSubmit}>
          <input
          type="text"  
          name="text" 
          id="text" 
          value={this.state.text} 
          onChange={(event) => this.setState({ text: event.target.value })}
        />
        <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }
}

export default FilmsList;
