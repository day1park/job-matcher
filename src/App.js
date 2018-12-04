import React, { Component } from "react";
import "./App.css";
import MainNav from "./navbar/navbar";
import Header from "./header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Header />
      </div>
    );
  }
}

export default App;
