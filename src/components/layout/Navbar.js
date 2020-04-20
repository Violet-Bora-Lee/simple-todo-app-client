import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
	return (
		<div className="navbar bg-primary">
			<h1>
				<i className={icon}/>  {title}
			</h1>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

Navbar.defaultProps = {
	title: 'Todo App',
	icon: 'fas fa-clipboard-list'
};

export default Navbar;
