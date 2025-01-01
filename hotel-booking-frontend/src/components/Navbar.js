import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/user">User</Link>
        </nav>
    );
}

export default Navbar;
