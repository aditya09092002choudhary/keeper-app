import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
           Copyright  &copy; {new Date().getFullYear()} | @ Aditya Choudhary
        </div>
    );
}

export default Footer;
