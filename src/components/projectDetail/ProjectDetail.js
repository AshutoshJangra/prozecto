import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import "../../App.css";

import DetailRM from './DetailRM';
import TimeTemplate from './TimeTemplate';
import ProDescription from './ProDescription';


class ProjectDetail extends Component {

  constructor() {
    super();
    this.state = {
      redirect: false

    };
  }

  componentWillMount() {
    const slug = this.props.match.params.slug;
    this.props.dispatch(actions.fetchProjectById(slug));
  }


  render() {
   const { author } = this.props.project;

    return author ? (
      <div className=" flex justify-center  ">
        <div>
          <TimeTemplate />
        </div>

        <div>
          <ProDescription project={this.props.project} />
        </div>

        <div>
          <DetailRM project={this.props.project} />
        </div>

      </div>
    ) : (
    <div className=" tc ">
        loading...
    </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    project: state.selectedProjectReducer.data
  };
};

export default connect(mapStateToProps)(ProjectDetail);
