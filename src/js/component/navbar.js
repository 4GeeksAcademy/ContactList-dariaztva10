import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand m-3 mb-0 h1">Back to agenda</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success m-3">Add new conatct</button>
				</Link>
			</div>
		</nav>
	);
};
