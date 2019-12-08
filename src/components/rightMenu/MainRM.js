import React, {Component} from 'react';
import '../../App.css';
import addIcon from '../../images/addIcon.png';


class MainRM extends Component {
	render(){

		return(
			<div className="right-area" >
      			<div className="tagline-box card">
      				<h1 className="tc navy  f4 border-light-bt pb3">Make Projects <br/> While Learning </h1>
      				<p className="f6 fw5 near-black tc pt2">Don't wait until you learn everything because best way to learn is by doing it</p>
      			</div>

      			<div className="steps-box card pb3">
      				<h1 className="tc near-black f5 fw8  pb3">3 Simple Steps </h1>
      				<h3 className="f6 navy fw5 bold   pv2 border-light-bt">Select a project and 'Start' to build it</h3>
      				<h3 className="f6 navy fw5 bold pv3 border-light-bt">Submit it in given time</h3>
      				<h3 className="f6 navy fw5 bold  pv3 ">Get code reviews and Reward points for every succesful submission</h3>
      			</div>
			</div>
		);
	}
}


export default MainRM;
