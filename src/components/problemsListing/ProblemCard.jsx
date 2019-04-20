import React from "react";
import photo from "./photo.png";
import styles from "./Problems.css";

const ProblemCard = props => {
	const { title, createdAt, author, description } = props.problem;
	//console.log(title, description);

	return (
		<div className="">
		    
			
			{/*<div dangerouslySetInnerHTML={{ __html: description }} /> */}
		</div>
	);
};

export default ProblemCard;
