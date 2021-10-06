import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
	//goal: have MyRoutines only show as an option if the user is logged in
    //supply it the userId to get their routines

    //have switch between stuff available to logged in users vs not logged in
    //Logged in:
    //  My Routines
    //  User profile page?

    return <header>
        <h1>Fitness Trackr</h1>
            <nav>
                <Link className="navLink" exact to="/">Home</Link>
                <Link className="navLink" exact to="/routines">Routines</Link>
                <Link className="navLink" exact to="/register">Register</Link>
                <Link className="navLink" exact to="/login">Login</Link>
                <Link className="navLink" exact to="/activities">Activities</Link>
                <Link className="navLink" exact to="/myroutines">My Routines</Link>
            </nav>
        </header>
}

export default Header;