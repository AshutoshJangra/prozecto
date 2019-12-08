import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

import TaskCard from './TaskCard';

import photo3 from '../../images/train1.jpg' ;


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
				<div className="flex">
					<img src={photo3} alt="showcase-photo" style={{width:'50vw' , height:'60vh' , marginLeft:'5vw' , padding:'4vh',paddingTop:'6vh'}} />

			        <div className="current ">
			          <h2 className= 'tet  mb3 dark-gray' >{title}</h2>
			          <h3 className="t">{concept}</h3>
			          <h1 className="fw1 f2 mb0"> 16 : 42 <span className="f5 dark-gray">hr left</span></h1>
					<h1 className="fw1 f5 ml2"> 1 / 7 <span className="f7 dark-gray">completed</span></h1>
			          <button className="learn-more-btn  shadow-5">Live Demo</button>
			          <button className="learn-more-btn shadow-5">Pending</button>
			          <p className="mv f7 mid-gray"></p>
			        </div>
				</div>
			
		        <div className=" ">
		          <div className="tc ">
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
		): <h2 className="h4 tc ml5 mt5 fw1">Loading...</h2>
	}
}

const mapStateToProps = state => {
	return {
		current: state.currentReducer
	};
};

export default connect(mapStateToProps)(CurrentProject);
