import React from 'react';
import './Header.css';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="top-banner">
                    <h1 className="header col-sm-12">I'm <span className="style">Nuran</span> Awsaf</h1> 
                    <h1>Web Developer</h1>
                    <div>
                        <a target="_blank" href="https://www.facebook.com/awsaf00001/"><FaFacebookSquare className="icon1"/></a>
                        <a target="_blank" href="https://www.instagram.com/nuren_awsaf/"><FaInstagram className="icon2"/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/nuran-awsaf-b1428a13a/"><FaLinkedin className="icon3"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;