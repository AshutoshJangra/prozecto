import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

import profileIcon from "../../images/profileIcon.svg";
import logoutIcon from "../../images/logoutIcon.png";

import "../../App.css";

class Header extends Component {

  handleLogout = () => {
    this.props.logout();
  };

  changeModalState = () => {
      this.props.dispatch(actions.changeState()) ;
  }

  renderAuthButtons = () => {
    const { isAuth } = this.props.auth;
    if (isAuth) {
      return (
         <React.Fragment>
             <div className=" flex mt2 mr4  justify-between">
                     {/*} <Link className="  link" to="/current">Current</Link>
                      <Link className="  link" to="/finished">Finished</Link>
                      <Link className="  link" to="/">Contribute</Link>
                      <Link className="  link" to="/">Blogs</Link>
                       <Link className=" no-underline  dark-gray f6 fw6 pa1 pr4 link" to="/">My Profile</Link> */}
                      <img src={profileIcon}  alt="profile" className=" mr4" style={{height:'30px'}} />

                      <button
                              className=" bn ml3 bg-white mr2  "
                              onClick={this.handleLogout}>
                                      <img src={logoutIcon}  alt="logout" className="mt1 mr4" style={{height:'25px'}}/>

                      </button>
              </div>
          </React.Fragment>
      );
    }else{
      return(
         <React.Fragment>
              <div className=" flex  justify-between mr2">
                  <Link className=" link" to="/">Blogs</Link>
                  {/* <Link className=" no-underline  dark-gray f6 fw6 pa1 pr4 link" to="/">My Profile</Link> */}

                  <Link className="login-btn grow " to="/login" onClick={this.changeModalState} >Log In</Link>
                  <Link className="register-btn grow " to="/register">Sign Up</Link>
              </div>
         </React.Fragment>
        );
    }
  };

  render() {
    return (
      <nav className="header sticky flex justify-between">
        <a
          className=" no-underline   flex items-center "
          href="/"
        >
          <h2 className=" code navy" style={{ fontSize:'24px' , marginLeft:'5vw'  ,  letterSpacing:'0px'}}>Prozecto</h2>
        </a>
        <div className="pa2  items-center">
          {this.renderAuthButtons()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer
  };
}

export default withRouter(connect(mapStateToProps)(Header));
