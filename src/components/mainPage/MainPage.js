import React, { Component } from "react";
import "../../App.css";
import { BrowserRouter as Router} from "react-router-dom";



import ProjectDetail from '../dashboard/ProjectDetail';

import Scroll from '../Scroll.js'
import Dashboard from '../dashboard/Dashboard';

class MainPage extends Component {
  render() {
    return (
      <Router >
        <div className="mainPage mt0 ">

          <div className="">
              <div className="main-area ">
                       {this.props.children}
              </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default MainPage;
