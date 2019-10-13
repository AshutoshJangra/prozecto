import React, { Component } from "react";
import "../../App.css";
import addIcon from "../../images/addIcon.png";

class RightMenu extends Component {
	render() {
		return (
			<div className="right-area ">
				<img src={addIcon} alt="add-icon" className="ma2 pointer " />
				<h3 className="gray ma2 f6 fw2">
					Click on project and 'Add' to start
				</h3>
			</div>
		);
	}
}

export default RightMenu;
