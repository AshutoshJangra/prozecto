import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import "../../App.css";

import Gif from "../../images/gif.png";

import TaskCard from './TaskCard';

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
    const { author, title,concept, description ,tasks } = this.props.project;

    return author ? (
      <div className="project-detail ">
        <div className="current  ">
          <h2 className= 'tet' >{title}</h2>
          <h3 className="t">{concept}</h3>
          <h1 className="fw1 mb0"> 16 : 42 <span className="f7 gray">hr left</span></h1>
          <button className="learn-more-btn">Live Demo</button>
          <button onClick={this.AddToCurrent} className="learn-more-btn" style={{background:'#000' , color:'#fff' , border:'none'}}>Add</button>
        </div>

        <div className="flex-ns pa3">
          <div className="ml5">
            <h1 className="f5  ">Description</h1>
            <h3 className="detail_description">{description}</h3>
          </div>
          <div className="ml4">
            <h3 className="f5 ml5 mb4">Tasks to do</h3>

            {
              // displaying all task cards
              tasks.map(task => {
                  return <TaskCard task = {task} /> ;
              })
            }
          </div>
        </div>
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
