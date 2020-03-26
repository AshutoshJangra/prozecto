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

const limitDesc= (desc, limit = 70) => {
	const newDesc = [];
	if (desc.length > limit) {
		desc.split(" ").reduce((acc, cur) => {
			if (acc + cur.length <= limit) {
				newDesc.push(cur);
			}
			return acc + cur.length;
		}, 0);

		// return the result
		return `${newDesc.join(" ")} ...`;
	}
	return desc;
};

class ProblemDisplay extends Component {
	render() {
		let { title, description,image, slug ,level , concept} = this.props.project;
		title = limitProjectTitle(title);
		description = limitDesc(description);


		return (
			<Link className="no-underline" to={`p/${slug}`}>
				<div className="card  mv3 flex mr5 ml0 bg-white" style={{width:'40.5vw' , height:'200px'}}>

					<div  style={{width:'15vw' ,background:`url(${image})`, backgroundSize:'cover'}} />


					<div className=" flex flex-column pa2 ph4 justify-between pb1 	center ml1 " style={{width:'25vw'}}>
						<div className="">
							<h2 className=" mid-gray fw6 f6 mv3" style={{}}>{title}</h2>
							<h2 className=" gray fw4" style={{fontSize:'0.68em'}}>{description}</h2>

						</div>
						<div className="flex mv3 ">
							<h4 className="bg-light-green green ph3 pv1 br4 pt2 mr3 fw3"  style={{fontSize:'0.65em'}}>{level}</h4>
							<h4 className="border-light dark-gray ph3 pv1 br4 mr3 fw3"  style={{fontSize:'0.65em'}}>{concept}</h4>
						</div>	
						
						
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
