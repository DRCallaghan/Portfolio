import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Link className="btn btn-light m-2" to="/">
                About Me
            </Link>
            <Link className="btn btn-light m-2" to="/portfolio">
                Portfolio
            </Link>
            <Link className="btn btn-light m-2" to="/resume">
                Resume
            </Link>
            <Link className="btn btn-light m-2" to="/contact">
                Contact Me
            </Link>
        </>
    );
};

export default Navigation;