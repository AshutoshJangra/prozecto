import React from "react";

import { Link } from "react-router-dom";

const Tab = props => {
	return (
		<div className=" near-white bg-near-black h2 flex	">
			<Link
				className="tab-option f5 pa2 pl4 near-white no-underline"
				to="/dashboard"
			>
				Problem
			</Link>
			<Link
				className="tab-option f5 pa2 pl4 near-white no-underline"
				to="/dashboard/requirements"
			>
				Requirements
			</Link>
			<Link
				className="tab-option f5 pa2 pl4 near-white no-underline"
				to="/dashboard/hints"
			>
				Hints
			</Link>
		</div>
	);
};

export default Tab;
