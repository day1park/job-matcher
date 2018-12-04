import React, { Component } from "react";
import "./App.css";
import getData from "./data/get-data";
import MainNav from "./navbar/navbar";
import Header from "./header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobData: []
    };
  }
  componentDidMount() {
    const data = getData();
    data.then(info => {
      this.setState({
        jobData: info
      });
      console.log(this.state);
    });
  }
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
