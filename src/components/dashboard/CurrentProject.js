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
		return title?(
			<div className="">
				
				<div className="heading f4 tc mt4 fw6 "></div>
				<h3 className="f6 mt3  fw4 black "></h3>
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
