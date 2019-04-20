import React from "react";
import "../../App.css";
import tube from '../../icons/tube.png';
import creative from '../../icons/creative.png';
import review from '../../icons/review.png';



const Working = () => {
	return (
		<div className="working-area bg-washed-yellow">
			<div className="text mid-gray pt3 pt4-ns pb3-ns pb2">
				<span className="tc ">The workflow in 3 steps</span>
			</div>

			<div className="flex-ns pa4 pt0">
				<div className="work-card">
					<img src={tube} alt="" />
					<h3 className="dark-gray">Get Real-life Problem</h3>
					<p className="mid-gray">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi iure esse beatae dignissimos hic optio.
					</p>
				</div>

				<div className="work-card">
					<img src={creative} alt="" />
					<h3 className="dark-gray">Find Creative Solutions</h3>
					<p className="mid-gray">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi iure esse beatae dignissimos hic optio.
					</p>
				</div>

				<div className="work-card">
					<img src={review} alt="" />
					<h3 className="dark-gray">Submit and Review</h3>
					<p className="mid-gray">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi iure esse beatae dignissimos hic optio.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Working;
