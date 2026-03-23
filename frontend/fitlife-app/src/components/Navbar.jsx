import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="fitlife-navbar">
            <div className="fitlife-navbar-logo">
                <Link to="/">
                    FITLIFE<span className="fitlife-navbar-highlight">PRO</span>
                </Link>
            </div>
            <ul className="fitlife-navbar-links">
                <li><Link to="/" className="fitlife-navbar-active">Home</Link></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#trainers">Trainers</a></li>
                <li><Link to="/auth" className="fitlife-navbar-btn">Join Now</Link></li>
            </ul>
            <div className="fitlife-navbar-hamburger">
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    );
};

export default Navbar;
