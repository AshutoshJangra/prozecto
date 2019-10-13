import React from "react";

import { Link } from "react-router-dom";

const Tab = props => {
	return (
		<div className=" mt2 bg-white justify-around flex	">
			<Link
				className="tab-option f5   near-black no-underline"
				to="/dashboard"
			>
				Problem
			</Link>
			<Link
				className="tab-option f5    near-black no-underline"
				to="/dashboard/requirements"
			>
				Requirements
			</Link>
			<Link
				className="tab-option f5    near-black no-underline"
				to="/dashboard/hints"
			>
				Hints
			</Link>
		</div>
	);
};

export default Tab;
