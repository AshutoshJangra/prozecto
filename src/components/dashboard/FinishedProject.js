import React from "react";

import "../../App.css";
import image from '../../images/web-comp.jpg';
import image1 from '../../images/weather-app.jpg';
import image2 from '../../images/color-palette.jpg';

const FinishedProject = () => {
		return (
			<div className="pa3 ml5 mb5">

					<h3 className="f4 near-black ma2  pa2" > Finished Projects</h3>

<div className="flex flex-wrap">
				  <div className="list bg-white mh3 mv3  ">
							<img src={image} style={{height:'150px' , width:"220px"}} alt="cover" />

							<div className="ph3">
								<h2 className=" mv1 navy f5"> Web Components </h2>

								<div className="flex ">
									<h2 className="f7 mid-gray pr2" >Level 1</h2>
									<h2 className="f7 mid-gray ph2 " >Modern JavaScript</h2>
								</div>

								<h3 className="purple f6 mv2 pb2"> 300 points </h3>
							</div>
					</div>

					<div className="list bg-white mh3 mv3 ">
							<img src={image1} style={{height:'150px' , width:"220px"}} alt="cover" />

							<div className="ph3">
								<h2 className=" mv1 navy f5"> Web Components </h2>

								<div className="flex ">
									<h2 className="f7 mid-gray pr2" >Level 1</h2>
									<h2 className="f7 mid-gray ph2 " >Modern JavaScript</h2>
								</div>

								<h3 className="purple f6 mv2"> 300 points </h3>
							</div>
					</div>

					<div className="list bg-white mh3 mv3 ">
							<img src={image2} style={{height:'150px' , width:"220px"}} alt="cover" />

							<div className="ph3">
								<h2 className=" mv1 navy f5"> Web Components </h2>

								<div className="flex ">
									<h2 className="f7 mid-gray pr2" >Level 1</h2>
									<h2 className="f7 mid-gray ph2 " >Modern JavaScript</h2>
								</div>

								<h3 className="purple f6 mv2"> 300 points </h3>
							</div>
					</div>

					<div className="list bg-white mh3 mv3  ">
							<img src={image} style={{height:'150px' , width:"220px"}} alt="cover" />

							<div className="ph3">
								<h2 className=" mv1 navy f5"> Web Components </h2>

								<div className="flex ">
									<h2 className="f7 mid-gray pr2" >Level 1</h2>
									<h2 className="f7 mid-gray ph2 " >Modern JavaScript</h2>
								</div>

								<h3 className="purple f6 mv2 pb2"> 300 points </h3>
							</div>
					</div>

					<div className="list bg-white mh3 mv3  ">
							<img src={image} style={{height:'150px' , width:"220px"}} alt="cover" />

							<div className="ph3">
								<h2 className=" mv1 navy f5"> Web Components </h2>

								<div className="flex ">
									<h2 className="f7 mid-gray pr2" >Level 1</h2>
									<h2 className="f7 mid-gray ph2 " >Modern JavaScript</h2>
								</div>

								<h3 className="purple f6 mv2 pb2"> 300 points </h3>
							</div>
					</div>
			</div>
			</div>
		);
}

export default FinishedProject;

{
	/*<div dangerouslySetInnerHTML={{ __html: description }} /> */
}
