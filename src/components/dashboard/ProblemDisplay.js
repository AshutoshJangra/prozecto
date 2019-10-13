import React, { Component } from "react";
import axios from "axios";

import "../../App.css";
import image from "../../images/train.jpg";

import { Link } from "react-router-dom";

const limitProjectTitle = (title, limit = 15) => {
	const newTitle = [];
	if (title.length > limit) {
		title.split(" ").reduce((acc, cur) => {
			if (acc + cur.length <= limit) {
				newTitle.push(cur);
			}
			return acc + cur.length;
		}, 0);

		// return the result
		return `${newTitle.join(" ")} ...`;
	}
	return title;
};

class ProblemDisplay extends Component {
	render() {
		let { title, description, slug ,level , concept} = this.props.project;
		title = limitProjectTitle(title);
        
		return (
			<Link className="no-underline" to={`p/${slug}`}>
				<div className="project-card  grow mr3 mt4 fw1 white">
					<div className="image ">
						<img src={image} alt="img" />
					</div>

					<div className="card-text pa2">
						<h2 className="f7 pa1  ">{title}</h2>
						
						<h4 className="f7 pa1  fw1">{level}</h4>
						
					</div>
				</div>
			</Link>
		);
	}
}

export default ProblemDisplay;

{
	/*<div dangerouslySetInnerHTML={{ __html: description }} /> */
}
