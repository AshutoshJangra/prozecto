import React, {Component} from 'react';
import '../../App.css';
import profileIcon from '../../images/profile-icon.png';

import { Link } from "react-router-dom";


class LeftMenu extends Component {
	render(){
		return(
			<div className="w-100  ">
              <div className="ml4 light flex justify-between ">
                <h2 className=" logo fw6 ">prozecto</h2>

                {/* <div className=" ">
                      <img src={profileIcon}  alt="profile" className="h3"/>
                      <h3 className="pl2 profile-name near-black f6  "><span className="gray f7">Hello,</span> <br/>Inderjyot Singh</h3>
                      </div>  */}

                <div className=" flex mt1 justify-between">
                	<Link className=" no-underline  active f6 fw6 pa1 pr4 link " to="/">Home</Link>
                	<Link className=" no-underline  dark-gray f6 fw6 pa1 pr4 link" to="/current">Current</Link>
                	<Link className=" no-underline  dark-gray f6 fw6 pa1 pr4 link" to="/">Finished</Link>
                	<Link className=" no-underline  dark-gray f6 fw6 pa1 pr4 link" to="/">Blogs</Link>
                	{/* <Link className=" no-underline  dark-gray f6 fw6 pa1 pr4 link" to="/">My Profile</Link> */}
                	
                  <button className="login-btn ba  br4 w4 h2 fw6 dark-gray bg-white mr2 f7">Log In</button>
                  <button className="login-btn bn br4 w4 h2 fw6 dark-gray bg-green white mr3 f7">Sign Up</button>
                </div> 
              </div>

              
          </div>
		);
	}
} 

export default LeftMenu;