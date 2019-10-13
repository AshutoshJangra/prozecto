import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import "../../App.css";

import Gif from "../../images/gif.png";


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

  AddToCurrent = project => {
        actions.addToCurrent(this.props.project)
                  .then(added => console.log("added"))
                  .catch(err => console.log("failed to add this project to current"))
  }

  render() {
    const { author, title, description } = this.props.project;

    return author ? (
      <div className="ma2 ml5  ">
        

        <div className="project-showcase  ">
          <img src={Gif} />
        </div>
        <h1 className=" mt4 mb4 pt1 fw6 f4 dark-gray ">{title}</h1>
        <h3 className="f7 mt3 ml0">
          To see Live Version
          <span className="green  pa2 pointer">Click Here</span>
        </h3>

       
        <button onClick={this.AddToCurrent} className="tc pointer w-100 bn  mt3">
          <h2 className="f7 gray pa2 w6 tc bg-green white fw6"> Add</h2>
        </button>
        

        <div className="heading f4 green mt4 fw6 ">Description</div>
        <h3 className="f6 mt3  fw4 black ">{description}</h3>
      </div>
    ) : (
    <div className="ml5 mt4">
      <div className="w5 h2 mt2 white-bg"/>
      <div className="w6 h5 mt4 white-bg"/>
      <div className="w5 h1 mt3 white-bg"/>
      <div className="w6 h3 mt3 white-bg"/>
      <div className="w4 h2 mt4 white-bg"/>
      <div className="w6 h4 mt4 white-bg"/>
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
