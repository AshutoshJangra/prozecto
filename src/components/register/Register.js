import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import "../../App.css";

class Register extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			email: "",
			password: "",

			redirect: false,
			errors: []
		};
	}

	formChange = event => {
		switch (event.target.name) {
			case "username":
				this.setState({ username: event.target.value });
				break;
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

	registerUser = userData => {
		actions
			.register(this.state)
			.then(
				registered => this.setState({ redirect: true }),
				errors => this.setState({ errors })
			);
	};

	render() {
		const { errors, redirect } = this.state;

		{
			
			if (redirect) {
				return (
					<Redirect
						to={{
							pathname: "/login",
							state: { successRegister: true }
						}}
					/>
				);
			}
		}

		return (
			<div className=" f2 pa4 pb4	w-50-l pt0 pl7-ns ml6-ns pl5-m ml6-m  sans-serif">
				<h3 className="f2-ns f4 mid-gray fw4 ">Get Started For Free</h3>
				<label className="f4 fw1 mid-gray">Username</label>
				<input
					className="input-area w-100 ba b--light-silver pa2 f5 br-pill"
					type="text"
					name="username"
					onChange={this.formChange}
				/>
				<label className="f4 fw1 mid-gray">Email</label>
				<input
					className="input-area w-100 ba b--light-silver pa2 f5 br-pill "
					type="email"
					name="email"
					onChange={this.formChange}
				/>
				<label className="f4 fw1 mid-gray">Password</label>
				<input
					className="input-area w-100 pa2 f5 ba b--light-silver br-pill"
					type="password"
					name="password"
					onChange={this.formChange}
				/>

				<button
					className="btn-pro w-100 pa2 mb2 mt4 f4 fw1 bn near-white br-pill"
					onClick={this.registerUser}
				>
					Start making projects
				</button>

				<hr />

				<h2 className="tc f5 fw2 mid-gray">or Sign in with</h2>

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

export default Register;
