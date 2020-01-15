import React, { Component } from "react";
import axios from "axios";

import "../../App.css";
// import image from "../../images/train.jpg";


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
		let { title, description,image, slug ,level , concept} = this.props.project;
		title = limitProjectTitle(title);


		return (
			<Link className="no-underline" to={`p/${slug}`}>
				<div className="border-light card mv3 flex  bg-white">

						<img src={image} alt="img" style={{width:'13vw' , height:'18.4vh'}} />


					<div className=" pa3 ml3 ">
						<h2 className=" b  navy" style={{fontSize:'1.1em'}}>{title}</h2>

						<div className="flex ">
							<h4 className=" mid-gray mt2 "  style={{fontSize:'0.85em'}}>{level}</h4>
							<h4 className=" mid-gray mt2 ml3 "  style={{fontSize:'0.85em'}}>{concept}</h4>
						</div>
						<h4 className="f7 purple mt2 ">200 points</h4>
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
