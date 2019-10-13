import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import profileIcon from '../../images/profile-icon.png';
import "../../App.css";

class Header extends Component {

  handleLogout = () => {
    this.props.logout();
  };

  renderAuthButtons = () => {
    const { isAuth } = this.props.auth;
    if (isAuth) {
      return (
         <React.Fragment>
             <div className=" flex mt1 justify-between">
                      <Link className="  link " to="/">Home</Link>
                      <Link className="  link" to="/current">Current</Link>
                      <Link className="  link" to="/">Finished</Link>
                      <Link className="  link" to="/">Blogs</Link>
                      {/* <Link className=" no-underline  dark-gray f6 fw6 pa1 pr4 link" to="/">My Profile</Link> */}
                      <img src={profileIcon}  alt="profile" className="h2 mr3"/>
                      
                      <button
                              className="logout-btn ba br4 w4 h2 bg-white mr2 f7 "
                              onClick={this.handleLogout}>
                                          Logout
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
                  
                  <Link className="login-btn " to="/login">Log In</Link>
                  <Link className="register-btn " to="/register">Sign Up</Link>
              </div> 
         </React.Fragment>
        );
    }
  };

  render() {
    return (
      <nav className="header flex justify-between">
        <a
          className="link black  flex items-center "
          href="/"
        >
          <h2 style={{fontFamily: 'Mansalva' , fontSize:'35px' , marginLeft:'6vw'}}>prozecto</h2>
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
