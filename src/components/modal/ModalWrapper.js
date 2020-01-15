import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Modal from './Modal' ;
import Login from '../login/Login';
import Register from '../register/Register';
import { LoggedInRoute } from "../shared/auth/LoggedInRoute";

class ModalWrapper extends Component {
  render() {

    return (
        <Router>
          <div  >
           <Modal>
              <Route exact path="/login/" component={Login}/>
              <LoggedInRoute exact path="/register" component={Register} />
            </Modal>
          </div>
        </Router>
    );
  }
}

export default ModalWrapper;
