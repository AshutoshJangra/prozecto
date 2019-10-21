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
          <button className="learn-more-btn">Live Demo</button>
          <button onClick={this.AddToCurrent} className="learn-more-btn" style={{background:'#000' , color:'#fff' , border:'none'}}>Add</button>
        </div>

        <div className=" ">
          <div className="tc">
            <h1 className="f5  ma4  ">Description</h1>
            <h3 className="f6 fw1 mt2 w-50" style={{marginLeft:'auto' , marginRight:'auto'}}>{description}</h3>
          </div>
          <div className="">
            <h3 className="tc f5 ma4">Tasks to do</h3>
            
              {
                // displaying all task cards
                tasks.map(task => {
                    return <TaskCard task = {task}  /> ;
                })
              }
            
          </div>
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
