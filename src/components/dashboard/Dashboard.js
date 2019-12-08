import React, { Component } from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import ProjectListing from "../projectsListing/ProjectListing";
import ProjectDetail from "./ProjectDetail";
import CurrentProject from './CurrentProject'
import FinishedProject from './FinishedProject'

import MainPage from "../mainPage/MainPage";

class Dashboard extends Component {
  render() {
    
    return (

      <Router>
        <div className="" style={{background:'#f9f9f9'}}>
          <MainPage>
              <Route exact path="/" component={ProjectListing}/>
              <Route path="/p/:slug" component={ProjectDetail} />
              <Route path="/current" component={CurrentProject} />
              <Route path="/finished" component={FinishedProject} />
          </MainPage>
        </div>
      </Router>
    );
  }
}

export default Dashboard;

{
  /* <div className="mb3 w-100"> 
                 <Tab />
               </div>  
               
               <div className="content">
                   <Route exact path="/dashboard" component={ProblemListing} />
                                
                                <Route exact path="/dashboard/requirements" component={ProblemRequirements} />
                                <Route exact path="/dashboard/hints" component={ProblemHints} />
               </div> */
}
