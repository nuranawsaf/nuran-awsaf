import React from 'react';
import './About.css';
import nu from '../../images/nu.png';
import logo from '../../images/logo.png';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                    <nav class="navbar navbar-expand-lg navbar-light  nav-bg ">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/home">
                                <img src={logo} alt=""/>
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse nav-area" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item ">
                            <a class="nav-link active " aria-current="page" href="/home">
                                <span className="nav-iteam">Home</span>
                            </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/work">
                            <span className="nav-iteam">Work</span>
                            </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="resume">
                            <span className="nav-iteam">Resume</span>
                            </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/about">
                            <span className="nav-iteam">About</span>
                            </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/contact">
                            <span className="nav-iteam">Contact</span>
                            </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/contact">
                            <span className="lets-talk">Lets Talk</span>
                            </a>
                            </li>
                            
                            </ul>
                            </div>
                        </div>
                    </nav>
                <div className="col-md-8 text-center about-area">
                    <h1>Nuran Awsaf</h1>
                    <h5>WEB DEVELOPER | FREELANCER | WEB DEVELOPMENT TRAINER</h5>
                    <br/>
                    <p>I’m Nuran Awsaf, Working as a Professional Web Developer & Web Development Trainer in Bangladesh for almost 1 year. I have experience in all expect of web development using JavaScript. I am well trained in Java Technology, I am an Oracle Certified Professional Java SE 6 programmer, I have skills in PHP, JavaScript, WordPress Theme and Plugin Development beside that I am trained at front-end technology like HTML, CSS, JavaScript, jQuery, Bootstrap. My main focus is coding the website mobile-friendly, SEO friendly, browser compatible and maximum optimized way so that it performs well. I consider the business of my clients and Organize everything according to Google’s recommendation and It helps to rank the website more easily.</p>
                    <br/>
                    <a class="contact-btn" href="/contact">Contact me</a>
                    <a class="resume-btn" href="/resume">Resume</a>
                </div>
                <div className="col-md-4 about-area">
                    <img className="img-thumbnail" src={nu} alt=""/>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 text-center blog">
                    <h4>FREELANCER</h4>
                    <p>I am Working as a freelancer with over 4 years of successful freelancing in several areas of Web Application development and design. I engender and code stunning websites that are easy for the client to update and maintain. Although I am well versed in almost all aspects of web development, I specialize in PHP, JavaScript. I mainly use WordPress as my CMS of choice. Being that I offer both design and coding, along with frequent and fast communication, I am able to modernize projects and get them knocked out fast. I will work harder for you, and the Job is not done until you are 101% satisfied. I am looking forward to having solid business relationships that will stay.</p>
                </div>
                <div className="col-md-5 text-center blog">
                    <h4>WEB DEVELOPER</h4>
                    <p>As a web developer I focus on making smooth and effective user experiences through the Application that I work with. I specialize in development and design through PHP and love to develop new WordPress themes, Plugin, as well as strive to help those that rely on WordPress or any Other CMS, to get the most out of it Aside from PHP and WordPress I work with JavaScript-based Development(React, MongoDB, Express, Node), I have extensive experience with the eCommerce. I am very pixel perfect guy Quality and great communication is my goals with every client and work. Flexible for the price, accurate with turnaround time. Feel free to contact me.</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 text-center blog">
                    <h4>WEB DEVELOPMENT TRAINER</h4>
                    <p>I am Working as a freelancer with over 4 years of successful freelancing in several areas of Web Application development and design. I engender and code stunning websites that are easy for the client to update and maintain. Although I am well versed in almost all aspects of web development, I specialize in PHP, JavaScript. I mainly use WordPress as my CMS of choice. Being that I offer both design and coding, along with frequent and fast communication, I am able to modernize projects and get them knocked out fast. I will work harder for you, and the Job is not done until you are 101% satisfied. I am looking forward to having solid business relationships that will stay.</p>
                </div>
                <div className="col-md-5 text-center blog">
                    <h4>DIGITAL MARKETING & SEO EXPERT</h4>
                    <p>As a web developer I focus on making smooth and effective user experiences through the Application that I work with. I specialize in development and design through PHP and love to develop new WordPress themes, Plugin, as well as strive to help those that rely on WordPress or any Other CMS, to get the most out of it Aside from PHP and WordPress I work with JavaScript-based Development(React, MongoDB, Express, Node), I have extensive experience with the eCommerce. I am very pixel perfect guy Quality and great communication is my goals with every client and work. Flexible for the price, accurate with turnaround time. Feel free to contact me.</p>
                </div>
            </div>
        </div>
    );
};

export default About;