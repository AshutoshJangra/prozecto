import React, {Component} from 'react';
import '../../App.css';

import * as actions from "../../actions";

class DetailRM extends Component {

  AddToCurrent = project => {
        actions.addToCurrent(this.props.project)
                  .then(added => console.log("added"))
                  .catch(err => console.log("failed to add this project to current"))
  }


	render(){
    const { author, title,level,concept } = this.props.project;

		return(
		    <div className="add-pro-box card">
                <h2 className= 'tet f3 mv2 dark-gray' >{title}</h2>

                <div className="flex justify-between mv2 pv2 ">
                  <h3 className="f6  mid-gray mr3">{concept}</h3>
                  <h3 className="f6  mid-gray mh2">{level}</h3>
                </div>
                <button className="learn-more-btn  card">Live Demo</button>
                <button onClick={this.AddToCurrent} className="learn-more-btn card " style={{background:'#1e2730',  color:'#fff' , border:'none'}}>Add</button>

                <p className="f7 mv2  mh0  near-black">Click on "Add" to add this project to your current and start making it</p>
      	</div>
		);
	}
}


export default DetailRM;
