import React, { Component } from "react";
import ProblemCard from "./ProblemCard";

import axios from "axios";

class ProblemListing extends Component {
  constructor() {
    super();
    this.state = {
      problems: []
    };
  }

  componentWillMount() {
    this.getProblems();
  }

  getProblems = () => {
    axios
      .get("/api/v1")
      .then(
        res => this.setState({ problems: res.data }),
        err => Promise.reject(err.response.data.errors)
      );
  };

  render() {
    return (
      <div className=" bg-near-white">
        {this.state.problems.map(problem => (
          <ProblemCard problem={problem} key={problem._id} />
        ))}
      </div>
    );
  }
}

export default ProblemListing;
