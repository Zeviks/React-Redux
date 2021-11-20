import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello Nathan",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button
            onClick={() =>
              this.setState({ string: "Muahaha You Been Hacked!" })
            }
          >
            {this.state.string}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
