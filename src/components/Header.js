import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
	
    return <header>
        <h1>Fitness Trackr</h1>
            <nav>
                <Link className="navLink" exact to="/">Home</Link>
                <Link className="navLink" exact to="/routines">Routines</Link>
                <Link className="navLink" exact to="/register">Register</Link>
                <Link className="navLink" exact to="/login">Login</Link>

            </nav>
        </header>
}

export default Header;