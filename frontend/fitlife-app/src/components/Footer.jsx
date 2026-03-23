import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="fitlife-footer-section">
            <div className="fitlife-footer-content">
                <h2>FITLIFE<span>PRO</span></h2>
                <p>Transforming lives since 2025.</p>
                <p style={{ marginTop: '10px', color: '#aaa' }}>Contact: +91 97012 12372</p>
                <div className="fitlife-footer-socials">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
            <p className="fitlife-footer-copyright">Designed by AKHIL | All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
