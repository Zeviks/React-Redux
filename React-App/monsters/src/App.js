import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
<<<<<<< HEAD
      searchField: "",
=======
      searchField: ''
>>>>>>> 9358598ce82c1005c431f441d5fb0bb46dd87e42
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
<<<<<<< HEAD
        <SearchBox
          placeholder="Search Monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
=======
        <input type='search' placeholder='search monsters' 
        onChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={this.state.monsters} />
>>>>>>> 9358598ce82c1005c431f441d5fb0bb46dd87e42
      </div>
    );
  }
}

export default App;
