import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "../../App.css";

class Header extends Component {

   handleLogout = () => {
    this.props.dispatch(actions.logout());
   
  };

  renderAuthButtons = () => {
    const { isAuth } = this.props.auth;

    if (isAuth) {
      return (
        <button className="f6 dib black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--black-20 " onClick={this.handleLogout}>
          Logout
        </button>
      );
    }

    return (
      <React.Fragment >
        <Link className="f6 dib black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--black-20" to="/login">
          Login 
       </Link>
      </React.Fragment>
    );
  };

  render() {
    return (
      <nav className="flex justify-between header bb b--white-10">
        <a
          className="link black-70 hover-white no-underline flex items-center pa3"
          href=""
        >
          <svg
            className="dib h1 w1"
            data-icon="grid"
            viewBox="0 0 32 32"
            style={{ fill: "currentcolor" }}
          >
            <title>Super Normal Icon Mark</title>
            <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z" />
          </svg>
        </a>
        <div className="flex-grow pa3 flex items-center">
           {this.renderAuthButtons()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer
  }
}

export default withRouter(connect(mapStateToProps)(Header));

