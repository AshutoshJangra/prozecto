import React, { Component } from "react";
import "../../App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import LeftMenu from "./LeftMenu";
import RightMenuWOC from "../rightMenu/RightMenuWOC";

import ProjectDetail from '../dashboard/ProjectDetail';

import Scroll from '../Scroll.js'
import Dashboard from '../dashboard/Dashboard';

class MainPage extends Component {
  render() {
    return (
      <Router >
        <div className="mainPage mt0 ">
          {/*side menu left */}
          {/* <div className="bb pb2 b--light-gray  ">
                      <LeftMenu />
                    </div> */}
          
          <div className="dashboard flex justify-between">
              <div className="main-area ">
                <Scroll>
                  {this.props.children}
                </Scroll>
              </div>

              <div className="right-side-menu" />
                <RightMenuWOC  />
              </div>
          </div>    
              
      </Router>
    );
  }
}

export default MainPage;
