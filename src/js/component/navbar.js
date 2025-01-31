import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar justify-content-end">
			<div className="text-end">
				<Link to="/addContact">
					<button className="btn btn-secondary  me-2 button1">Add new contact</button>
				</Link>
				<Link to="/">
					<button className="btn btn-secondary button1">Go to Crear Agenda</button>
				</Link>
			</div>
		</nav>
	);
};