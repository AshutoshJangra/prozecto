import React, { Component } from "react";
import ProblemDisplay from "../dashboard/ProblemDisplay";

import { connect } from "react-redux";
import * as actions from "../../actions";

class ProblemListing extends Component {

  componentWillMount() {
    this.props.dispatch(actions.fetchProblems());
    
  }

  render() {
    return (
      <div className=" bg-white">
        {this.props.problems.map(problem => (
          <ProblemDisplay problem={problem} key={problem._id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    problems: state.problemReducer.data
  };
};

export default connect(mapStateToProps)(ProblemListing);

