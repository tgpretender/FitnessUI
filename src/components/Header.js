import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    const { isAuthenticated, setIsAuthenticated, setUserToken, setUsernameString} = props;

    function logoutUser() {
        setIsAuthenticated(false)
        setUserToken('')
        setUsernameString('')
        localStorage.clear()
        location.reload();
    } 

    return <header>
        <img src={process.env.PUBLIC_URL + 'images/TrackerTheFitnessCat.jpg'} className="headerImage" alt="Tracker the Fitness Cat says Move Your Tush!" title="Tracker the Fitness Cat says Move Your Tush!"/>
        <div className="headerRight">
        <h1 className="title">FiTNESS TRAC.Kr</h1>
            <nav>
                <Link className="navLink" exact to="/">Home</Link>
                <Link className="navLink" exact to="/routines">Routines</Link>
                <Link className="navLink" exact to="/activities">Activities</Link>
                { !isAuthenticated ? null : <Link className="navLink" exact to="/myroutines">My Routines</Link>}
                { !isAuthenticated ? null : <Link exact to="/"><button onClick={() => logoutUser()}>Log Out</button></Link>}
            </nav>
        </div>
        </header>
}

export default Header;