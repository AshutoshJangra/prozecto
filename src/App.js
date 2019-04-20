import React, { Component } from "react";
import MainPage from "./components/mainPage/MainPage";
import ProblemListing from "./components/problemsListing/ProblemListing";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App bg-near-white">
        <MainPage />

        <div className="problem-section ">
          <ProblemListing />
        </div>
      </div>
    );
  }
}

export default App;
