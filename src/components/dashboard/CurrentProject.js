import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

import TaskCard from './TaskCard';


class CurrentProject extends Component {
	componentWillMount() {
		this.props.dispatch(actions.getCurrent());
	}

	render() {
		const {
			title,
			description,
			tasks,
			concept,
			level,
			author
		} = this.props.current.current;
		
		return title?(
			<div className="project-detail ">
		        <div className="current  ">
		          <h2 className= 'tet' >{title}</h2>
		          <h3 className="t">{concept}</h3>
		          <h1 className="fw1 mb0"> 16 : 42 <span className="f7 dark-gray">hr left</span></h1>

		          <button className="learn-more-btn grow shadow-5">Live Demo</button>
		          <button className="learn-more-btn grow shadow-5">Pending</button>
		        </div>

		        <div className=" ">
		          <div className="tc ">
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
		): <h2 className="h4 tc ml5 mt5 fw1">Loading...</h2>
	}
}

const mapStateToProps = state => {
	return {
		current: state.currentReducer
	};
};

export default connect(mapStateToProps)(CurrentProject);
