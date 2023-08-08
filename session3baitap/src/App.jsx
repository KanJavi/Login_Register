import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import ListItems from "./components/header/ListItems";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ListItems />
      </div>
    );
  }
}

export default App;
