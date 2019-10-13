import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

class CurrentProject extends Component {
	componentWillMount() {
		this.props.dispatch(actions.getCurrent());
	}

	render() {
		const {
			title,
			tasks,
			concept,
			level,
			author
		} = this.props.current.current;
		console.log(this.props.current.current);
		return (
			<div className="ma2 ml5">
				<div className="project-showcase  ">
					
				</div>

				<h1 className=" mt4 mb4 pt1 fw6 f4 dark-gray ">{title}</h1>


				<div className="heading f4 green mt4 fw6 ">Description</div>
				<h3 className="f6 mt3  fw4 black ">{concept}</h3>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		current: state.currentReducer
	};
};

export default connect(mapStateToProps)(CurrentProject);
