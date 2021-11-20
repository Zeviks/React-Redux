import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Sally",
          id: "sal",
        },
        {
          name: "Bally",
          id: "bal",
        },
        {
          name: "Gally",
          id: "gal",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 id="{monster.id}">{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
