import React, { Component } from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ProblemDisplay from "./ProblemDisplay";
import ProblemRequirements from "./ProblemRequirements";
import ProblemHints from "./ProblemHints";

import ProblemListing from "./../problemsListing/ProblemListing";

import Tab from './Tab';

class Dashboard extends Component {
     
 

  render() {
    return (
     <Router>
      
      <div className="dashboard">
        <div className="mb3 w-100"> 
          <Tab />
        </div>
        
        <div className="content">
             <Route exact path="/dashboard" component={ProblemListing} />
             
             <Route exact path="/dashboard/requirements" component={ProblemRequirements} />
             <Route exact path="/dashboard/hints" component={ProblemHints} />
        </div>
      </div>
      </Router>
    );
  }
}



export default Dashboard;
