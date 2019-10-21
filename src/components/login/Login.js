import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import { Link } from "react-router-dom";
import "../../App.css";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	formChange = event => {
		switch (event.target.name) {
			case "email":
				this.setState({ email: event.target.value });
				break;
			case "password":
				this.setState({ password: event.target.value });
				break;
			case "default":
				return;
		}
	};

	loginUser = userData => {
		this.props.dispatch(actions.login(this.state));
		
	};

	render() {
		const { isAuth, errors } = this.props.auth;

		if (isAuth) {
			return <Redirect to={{ pathname: "/" }} />;
		}

		return (
			<div className=" flex flex-column ma6 mt5 w-30-ns" style={{marginLeft:'auto' , marginRight:'auto'}}>
				<h3 className="tc fw1 ma3 ">
					Login to your Account
				</h3>

				<label className="ma3 ml0">Email</label>
				<input
					className="h2   "
					type="email"
					name="email"
					onChange={this.formChange}
				/>
				<label className="ma3 ml0">Password</label>
				<input
					className="h2 "
					type="password"
					name="password"
					onChange={this.formChange}
				/>

				
					<button
					className="h2 f6 bg-black white bn mt4 mb3 "
					onClick={this.loginUser}
				>
					Log In
				</button>
 				
			

				<h2 className="tc pt3 f6 fw1 gray">forget password ?</h2>
				
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.authReducer
	};
}

export default connect(mapStateToProps)(Login);
