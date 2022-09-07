import React from 'react';
import Navigation from './Navigation';
import './assets/header.css';

const Header = () => {
    const styles = {
        headerStyle: {
            background: 'linear-gradient(20deg, #77b5d9, #d7eaf3, #d7eaf3,#14397d)',
            height: '10vh',
            width: '100%',
            position: 'sticky',
            top: '0',
            boxShadow: '0 2px 6px -2px rgba(0,0,0,.2)',
            zIndex: '400'
        },
        logoStyle: {
            position: 'relative',
            paddingBottom: '10px',
            fontSize: 'max(2.5vh + 1.5vw)',
            textShadow: ' 2px 2px  rgba(0,0,0,.2)',
            color: '#14397d',
            left: '10px',
        },
        logoIcon: {
            objectFit: 'contain',
            width: '10vw',
            marginTop: '7px',
            minWidth: '120px'
        },
    };

    return (
        <header style={styles.headerStyle}>
            <div style={styles.headerStyle} className="header w-100 mt-auto text-dark p-4">
                <div className="text-dark">
                    <h1 style={styles.logoStyle} className="m-0">
                        Dennis Callaghan | Software Engineer
                    </h1>
                </div>
                <div>
                    <Navigation />
                </div>
            </div>
        </header>
    );
};

export default Header;
