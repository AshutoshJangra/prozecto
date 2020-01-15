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
			<div className="flex flex-column mh6 pv5  w-30-ns" style={{marginLeft:'auto' , marginRight:'auto'}}>
				<h3 className=" tc fw1 ma3">Get Started For Free</h3>
				<label className="ma3 ml0">Username</label>
				<input
					className="h2"
					type="text"
					name="username"
					onChange={this.formChange}
				/>
				<label className="ma3 ml0">Email</label>
				<input
					className="h2"
					type="email"
					name="email"
					onChange={this.formChange}
				/>
				<label className="ma3 ml0">Password</label>
				<input
					className="h2"
					type="password"
					name="password"
					onChange={this.formChange}
				/>

				<button
					className="h2 f6 bg-black white bn mt4 mb3"
					onClick={this.registerUser}
				>
					Start making projects
				</button>
			</div>
		);
	}
}

export default Register;
