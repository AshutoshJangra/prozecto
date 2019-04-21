import React, { Component } from "react";
import axios from "axios";

class ProblemDisplay extends Component {

   
	render() {
		const { title, description, grade } = this.props.problem;
		
		return (
			<div className="pa4 h helvetica lh-copy pt2">
				<h2 className="f3 near-black">{title}</h2>
				
				<div dangerouslySetInnerHTML={{ __html: description }} className="helvetica lh-copy pb4" /> 

				<hr/>

				<h2 className="f3 near-black">You will </h2>
				<ul>
				  <li className="pt1 pb1">Understand the ideas of slope and y-intercept within the context of Domino’s pizza pricing</li>
				  <li className="pt1 pb1">Write and graph a linear equation given two points on the line</li>
				  <li className="pt1 pb1">Understand what it means for a function to be linear (constant rate of change)</li>
                </ul>

                <hr/>

                <h2 className="f3 near-black">Before you begin</h2>
				<p>You should be able to calculate a unit rate (e.g. “cost per topping”). As this lesson is meant to be introductory, no prior knowledge of linear functions is assumed.</p>


			</div>
		);
	}
}

export default ProblemDisplay;

{
	/*<div dangerouslySetInnerHTML={{ __html: description }} /> */
}
