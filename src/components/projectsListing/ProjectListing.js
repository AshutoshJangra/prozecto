import React, { Component } from "react";
import ProblemDisplay from "../dashboard/ProblemDisplay";

import FeaturedProject from '../mainPage/FeaturedProject'

import { connect } from "react-redux";
import * as actions from "../../actions";

class ProjectListing extends Component {
 componentWillMount() {
    this.props.dispatch(actions.fetchProjects());
  }

  render() {

    const {projects} = this.props;

    return !projects.length ? (
      <h2 className="tc f5 fw1">Loading...</h2>
    ) : (
      <div className="">

        <FeaturedProject />
        <div className="dashboard ml5">
        <div className="heading flex justify-between">
                <h2 className="title f5 mt4  dark-gray fw6">Projects</h2>
                {/*<h3 className="f7 mt0 pt3  dark-green fw5 near-black">show more</h3> */}
        </div>

        <div className="project_list flex ">
            {projects.map(project => (
              <ProblemDisplay  project={project} key={project._id} />
            ))}
        </div>

  
        <div className="heading flex justify-between">
            <h2 className="title f5 mt4  dark-gray fw6">Modern JavaScript</h2>
            {/* <h3 className="f7 mt4 pt1 dark-green fw5 near-black">show more</h3> */}
        </div>

       <div className="project_lis flex ">
            {projects.map(project => (
              <ProblemDisplay  project={project} key={project._id} />
            ))}
        </div>
        
            <div className="heading flex justify-between">
            <h2 className="title f5 mt4  dark-gray fw6">Html / Css</h2>
            {/* <h3 className="f7 mt4 pt1 dark-green fw5 near-black">show more</h3> */}
        </div>

       <div className="project_lis flex ">
            {projects.map(project => (
              <ProblemDisplay  project={project} key={project._id} />
            ))}
        </div>
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

export default connect(mapStateToProps)(ProjectListing);
