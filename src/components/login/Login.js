import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
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
		console.log(this.state);
	};

	render() {
		const { isAuth, errors } = this.props.auth;

		if (isAuth) {
			return <Redirect to={{ pathname: "/dashboard" }} />;
		}

		return (
			<div className=" f2 w-40-l pa4 pt0 pl6-ns  ml7-ns pl5-m ml6-m  sans-serif">
				<h3 className="f2-ns f4 mid-gray fw4 ">
					Login to your Account
				</h3>

				<label className="f4 fw1 mid-gray">Email</label>
				<input
					className="input-area w-100 ba b--light-silver pa2 f5 br-pill "
					type="email"
					name="email"
					onChange={this.formChange}
				/>
				<label className="f4 fw1 mid-gray">Password</label>
				<input
					className="input-area w-100 pa2 f5 ba b--light-silver br-pill "
					type="password"
					name="password"
					onChange={this.formChange}
				/>

				<button
					className="btn-pro w-100 pa2 mt4 f4 fw1 bn near-white br-pill"
					onClick={this.loginUser}
				>
					Log In
				</button>

				<h2 className="tc pt3 f5 fw2 gray">forget password ?</h2>
				<hr />
				<h2 className="tc f5 fw2 mid-gray">Sign in with</h2>

				<div className="flex justify-around">
					<img src="https://img.icons8.com/color/40/000000/facebook.png" />

					<img src="https://img.icons8.com/color/40/000000/twitter.png" />
					<img src="https://img.icons8.com/color/40/000000/google.png" />
					<img src="https://img.icons8.com/color/40/000000/instagram.png" />

				</div>
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
