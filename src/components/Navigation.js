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
            <a className="btn btn-light m-2" href="https://drive.google.com/file/d/1Z_f51JATbJeuJAPVTXiUpAm_Cy0b8LHy/view">
                Resume
            </a>
            <Link className="btn btn-light m-2" to="/contact">
                Contact Me
            </Link>
        </>
    );
};

export default Navigation;