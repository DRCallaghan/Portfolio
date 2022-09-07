import React from 'react';
import './assets/footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const styles = {
        footerStyle: {
            display: 'flex',
            justifyContent: "center",
            height: '15%',
            fontSize: 'max(2.5vh + 1.5vw)',
            color: '#14397d',
            background: 'linear-gradient(20deg, #77b5d9, #d7eaf3, #d7eaf3,#77b5d9)',
            bottom: '0'
        },
        extLinks: {
            paddingTop: '2.5vh',
            display: 'flex'
        }
    };

    return (
        <footer style={styles.footerStyle} className="footer w-100 mt-auto text-dark">
            <div style={styles.extLinks} className='center'>
                <div><a href='https://github.com/DRCallaghan'><FaGithub /></a><a href='https://www.linkedin.com/in/dennis-russell-callaghan/'><FaLinkedin /></a>
                    <p>Dennis Callaghan</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;