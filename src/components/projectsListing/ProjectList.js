import React, { Component } from "react";
import ProblemDisplay from "../dashboard/ProblemDisplay";

import FeaturedProject from '../mainPage/FeaturedProject'

import { connect } from "react-redux";
import * as actions from "../../actions";

import photo from '../../images/berl.jpg';

class ProjectList extends Component {
 componentWillMount() {
    this.props.dispatch(actions.fetchProjects());
  }

  render() {

    const {projects} = this.props;

    return !projects.length ? (
      <div className="tc ">
        <div style={{width:'45vw' , height:'57vh', background:'#f9f9f9'}}>Loading...</div>

      </div>
    ) : (
      <div className="" >
        <div className="mt3 ml0">
            <FeaturedProject />

        </div>

        <div className="project_lis mb4  ">
            {projects.map(project => (
              <ProblemDisplay  project={project} key={project._id} />
            ))}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projectReducer.data
  };
};

export default connect(mapStateToProps)(ProjectList);
