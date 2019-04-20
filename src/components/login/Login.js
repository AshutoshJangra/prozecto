import React, { Component } from "react";
import "../../App.css";

class Login extends Component {
	render() {
		return (
			<div className=" f2 pa2 pb4	 sans-serif">
				<h3 className="f2-ns f4 mid-gray fw4 ">Get Started For Free</h3>
				<label className="f4 fw1 mid-gray">Username</label>
				<input className="input-area w-100 ba b--light-silver pa2 f5 " type="text" />
				<label className="f4 fw1 mid-gray">Email</label>
				<input className="input-area w-100 ba b--light-silver pa2 f5  " type="email" />
				<label className="f4 fw1 mid-gray">Password</label>
				<input
					className="input-area w-100 pa2 f5 ba b--light-silver "
					type="password"
				/>

				<button className="btn-pro w-100 pa2 mt4 f4 fw1 bn near-white">
					Start making projects
				</button>
			</div>
		);
	}
}

export default Login;
