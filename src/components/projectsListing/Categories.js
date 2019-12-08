import React from 'react';

import '../../App.css';


import htmlIcon from '../../images/htmlIcon.svg';
import cssIcon from '../../images/cssIcon.svg';
import jsIcon from '../../images/jsIcon.svg';
import reactIcon from '../../images/reactIcon.svg';
import nodeIcon from '../../images/nodejsIcon.svg';
import dbIcon from '../../images/dbIcon.png';


const Categories = () => {
	return(
		<div className="categories card">
			<h2 className="f6 fw8 pa2 pt0 border-light-bt near-black">Categories</h2>

			<div className="flex ml2 mt1 mt2">
				<img src={htmlIcon} alt="html-icon" style={{height:'3vh' , marginTop:'1.4vh'}}/>
				<a href="#" className="no-underline navy  pa2 ml2  f6 ">HTML</a>
			</div>

			<div className="flex ml2 mt1">
				<img src={cssIcon} alt="html-icon" style={{height:'3vh' , marginTop:'2vh'}}/>
				<a href="#" className="no-underline  navy pa2 ml2  f6 ">CSS</a>
			</div>

			<div className="flex ml2 mt1">
				<img src={jsIcon} alt="html-icon" style={{height:'3vh' , marginTop:'2vh'}}/>
				<a href="#" className="no-underline  navy lue pa2 ml2  f6 ">JavaScript</a>
			</div>

			<div className="flex ml2 mt1">
				<img src={reactIcon} alt="html-icon" style={{height:'3vh' , marginTop:'2vh'}}/>
				<a href="#" className="no-underline  navy  pa2 ml2  f6 ">React JS</a>
			</div>

			<div className="flex ml2 mt1">
				<img src={nodeIcon} alt="html-icon" style={{height:'3vh' , marginTop:'2vh'}}/>
				<a href="#" className="no-underline  navy  pa2 ml2  f6 ">Node JS</a>
			</div>

			<div className="flex ml2 mt1">
				<img src={dbIcon} alt="html-icon" style={{height:'3vh' , marginTop:'2vh'}}/>
				<a href="#" className="no-underline  navy  pa2 ml2  f6 ">Mongo DB</a>
			</div>

		</div>
	);
}

export default Categories;
