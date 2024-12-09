import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){
    const [showLinks, setShowLinks] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleLinks = () => {
        if (isMobile) {
            setShowLinks(!showLinks);
        }
    };

    return(
        <nav className="navbar">
            <div className="logo">
                {isMobile && (
                    <button className="navbar-icon" onClick={toggleLinks}>☰</button>
                )}
                <span>VIEW LIMITLESS</span>
            </div>
            <div className={`links ${isMobile && showLinks ? 'active' : ''}`}>
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    )    
}
