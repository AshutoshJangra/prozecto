import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import "../../App.css";

import DetailRM from '../rightMenu/DetailRM';
// import photo3 from '../../images/train1.jpg' ;


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


  render() {
    const { author, title,level,image ,concept, description ,tasks } = this.props.project;

    return author ? (
      <div className="project-detail flex justify-center   ">
        <div className="categories bg-near-white" />


        <div className="middle_menu " >
          <div className="">
            <img src={image} alt="showcase-photo" style={{width:'45vw' , height:'57vh' , marginLeft:'5vw' , padding:'4vh',paddingTop:'6vh'}} />
          </div>


          <div className=" ">
              <div className="tc">
                <h1 className="f5  ma5  ">Description</h1>
                <h3 className="f6 fw1 mt2 w-50" style={{marginLeft:'auto' , marginRight:'auto'}}>{description}</h3>
              </div>
              <div className="">
                <h3 className="tc f5 ma5">Tasks to do</h3>

                {
                  // displaying all task cards
                  tasks.map(task => {
                      return <TaskCard task = {task}  /> ;
                  })
                }
              </div>
          </div>
      </div>

        <div className="detail_right_menu mt4">
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
