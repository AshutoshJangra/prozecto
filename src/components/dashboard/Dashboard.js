import React, { Component } from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";


import ProjectListing from "../projectsListing/ProjectListing";
import ProjectDetail from "../projectDetail/ProjectDetail";
import CurrentProject from '../current/CurrentProject'
import FinishedProject from './FinishedProject'

import Modal from '../modal/Modal' ;
import Login from '../login/Login';
import Register from '../register/Register';
import { LoggedInRoute } from "../shared/auth/LoggedInRoute";
import MainPage from "../mainPage/MainPage";

class Dashboard extends Component {


  render() {
  console.log(this.props.isOpen);
    return (

      <Router>
        <div className="mt3" style={{minWidth:'98vw'}} >
          <MainPage>
              <Route exact path="/" component={ProjectListing}/>
              <Route path="/p/:slug" component={ProjectDetail} />
              <Route path="/current" component={CurrentProject} />
              <Route path="/finished" component={FinishedProject} />

              {this.props.isOpen && <Modal>
                 <Route exact path="/login" component={Login}/>
                 <LoggedInRoute exact path="/register" component={Register} />
              </Modal>}

          </MainPage>

        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
	return {
		isOpen: state.modalReducer.isOpen
	};
}

export default connect(mapStateToProps)(Dashboard);

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
