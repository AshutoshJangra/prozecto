import React from 'react' ;
import photo from '../../images/train2.jpg' ;
import '../../App.css';

const FeaturedProject = () => {
	return(
		<div className="showcase" >
			<h2 className="tet">Train Info App</h2>
			<h3 className="t">Modern JavaScript</h3>
			<p style={{color:'#666' , fontSize:'.8em', paddingTop:'3vh'}}> &#11088; Featured  </p>
			<button className="learn-more-btn" >Explore</button>
						
		</div>
	)
}

export default FeaturedProject;