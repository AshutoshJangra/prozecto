import React, { Component } from "react";
import MainPage from "./components/mainPage/MainPage";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

import ProblemListing from "./components/projectsListing/ProjectListing";
import "./App.css";

import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetail from "./components/dashboard/ProjectDetail";

// import Modal from "./components/modal/Modal";  
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import { ProtectedRoute } from "./components/shared/auth/ProtectedRoute";
import { LoggedInRoute } from "./components/shared/auth/LoggedInRoute";

import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import * as actions from "./actions";

const store = require("./reducer/Store").init();

class App extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState = () => {
    store.dispatch(actions.checkAuthState());
  };

  logout = () => {
    store.dispatch(actions.logout());
  };

  render() {
    return (
      <Provider store={store}>
        <Router basename="/">
          <div className="App ">
            
             <Header logout={this.logout} /> 
            {/*<div className="nav bb b--light-gray  pa2 ph3 ">
                <ul className="flex ml5" style={{listStyle:'none'}}>
                    <li className="f7 pointer ph3 pl0">HTML</li>
                    <li className="f7 pointer ph3">CSS</li>
                    <li className="f7 pointer ph3">JavaScript</li>
                    <li className="f7 pointer ph3">React JS</li>
                    <li className="f7 pointer">Node JS</li>
                </ul>
                
            </div>*/}
            
           
           
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/p/:slug" component={Dashboard} />
            <Route exact path="/current" component={Dashboard} />
            <Route exact path="/finished" component={Dashboard} />

            <Route exact path="/login" component={Login} />
            
            <LoggedInRoute exact path="/register" component={Register} />
           
           <Footer />
      
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
