import React, { Component } from "react";
import "./App.css";
import MainNavbar from "./Navbar/navbar";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavbar />
        <Header />
      </div>
    );
  }
}

export default App;
