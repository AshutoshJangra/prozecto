import React from 'react' ;
import photo1 from '../../images/train3.jpg' ;
import photo2 from '../../images/train2.jpg' ;
import photo3 from '../../images/train1.jpg' ;

import '../../App.css';

const FeaturedProject = () => {
	return(
		<div className="showcase " >
			  <h2 className="tet">Train Info App</h2>
			 <h3 className="t">Modern JavaScript</h3>
			 <p style={{color:'#333' , fontSize:'.8em', paddingTop:'3vh'}}> &#11088; Featured  </p>
			 <button className="learn-more-btn grow shadow-5" >Explore</button>
		{/*	<div className="main-showcase">
				<img src={photo1} alt="showcase-photo" style={{width:'65vw' , height:'71vh' , marginLeft:'3vw', borderRadius:'5px'}} />
				<h2 className="f2 fw1 ml4 pl2">Train Info App</h2>
				<h3 className="f6 fw1 dark-gray ml4  pl3">Modern JavaScript</h3>
			</div>

			<div className="side-showcase">
				<div className="top-project mb3">
						<img src={photo2} alt="showcase-photo" style={{width:'27vw' , height:'30vh' , marginLeft:'1vw', borderRadius:'5px'}} />
						<h2 className="f5 fw1 ml1 pl2">Color Pallate</h2>
						<h3 className="f7 fw1 dark-gray ml1  pl2">Modern JavaScript</h3>
				</div>
				<div className="bottom-project">
						<img src={photo3} alt="showcase-photo" style={{width:'27vw' , height:'30vh' , marginLeft:'1vw', borderRadius:'5px'}} />
						<h2 className="f5 fw1 ml1 pl2">Web Components</h2>
						<h3 className="f7 fw1 dark-gray ml1  pl2">React Js</h3>
				</div>
			</div>
			*/}

		</div>
	)
}

export default FeaturedProject;