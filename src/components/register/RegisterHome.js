import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import "../../App.css";

class RegisterHome extends Component {
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
			<div className=" f2 pa3 pb4	sans-serif">
				<h3 className="f2-ns f4 mid-gray fw4 ">Get Started For Free</h3>
				<label className="f4 fw1 mid-gray">Username</label>
				<input
					className="input-area w-100 ba b--light-silver pa2 f5  "
					type="text"
					name="username"
					onChange={this.formChange}
				/>
				<label className="f4 fw1 mid-gray">Email</label>
				<input
					className="input-area w-100 ba b--light-silver pa2 f5  "
					type="email"
					name="email"
					onChange={this.formChange}
				/>
				<label className="f4 fw1 mid-gray">Password</label>
				<input
					className="input-area w-100 pa2 f5 ba b--light-silver "
					type="password"
					name="password"
					onChange={this.formChange}
				/>

				<button
					className="btn-pro w-100 pa2 mt4 f4 fw1 bn near-white "
					onClick={this.registerUser}
				>
					Start making projects
				</button>
			</div>
		);
	}
}

export default RegisterHome;
