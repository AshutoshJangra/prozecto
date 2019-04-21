import React from "react";
import "../../App.css";
import whyProzecto from "../../images/whyProzecto.png";
import newChallange from "../../images/newChallange.png";

const Why = () => {
	return (
		<div className="whyProzecto ">
			<div className="pa4  moon-black pt3 pt4-ns flex-l  justify-around-ns ">
				<div className="imf">
					<img
						src={whyProzecto}
						className="w-100 h-100 h-100-ns w-90-ns "
					/>
				</div>
				<div className="tr-l ma4-l  w-70-ns ">
					<h2 className="f2-l f4 fw6 ">WHY PROZECTO ?</h2>
					<p className=" f3-l f4  mid-gray">
						We provide Real-world lessons to help middle and high
						school students to build their concept stronger while
						challenging them to think critically about the world.
					</p>
				</div>
			</div>

			<div className="pa4 mb6-l moon-black pt3 pt4-ns flex-l  justify-around-ns ">
				
				<div className="tl-l ma4-l  w-70-ns ">
					<h2 className="f2-l f4 fw6 ">New challenge every week</h2>
					<p className=" f3-l f4  mid-gray">
						 Solve new challenges every week with an engaged community of lifelong learners.
						 You dont have to choose a problem for you , we got you covered.
					</p>
				</div>

				<div className="imf">
					<img
						src={newChallange}
						className="w-100 h-100 h-100-ns w-90-ns "
					/>
				</div>
			</div>
		</div>
	);
};

export default Why;
