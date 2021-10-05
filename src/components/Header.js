import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
	
    return <div className="header">
        <Link exact to="/">Home</Link>
        <Link exact to="/routines">Routines</Link>
    </div>
}

export default Header;