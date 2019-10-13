import React, {Component} from 'react';
import '../../App.css';
import addIcon from '../../images/addIcon.png';


class RightMenuWOC extends Component {
	render(){
    
		return(
			<div className="right-area" >
        <img src={addIcon} alt="add-icon" className="ma2 "/>
        <h3 className="dark-gray ma2 f6 fw2">Click on project and 'Add' to start</h3>

      </div>
		);
	}
} 


export default RightMenuWOC;