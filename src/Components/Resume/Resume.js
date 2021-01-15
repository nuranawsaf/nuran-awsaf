import React from 'react';
import './Resume.css'
import cv1 from '../../images/cv-01.png';
import cv2 from '../../images/cv-02.png';
import logo from '../../images/logo.png';

const Resume = () => {
    return (
        <div className="container">
                    <nav class="navbar navbar-expand-lg navbar-light  nav-bg">
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
            <div className="row cv-area">
                <h1>Resume</h1>
                <div className="col-md-6">
                    <img class="img-fluid" src={cv1} alt=""/>
                </div>
                <div className="col-md-6">
                    <img class="img-fluid" src={cv2} alt=""/>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-12">
                <a class="contact-btn" href="/contact">Contact me</a>
                <a class="resume-btn" target="_blank" href="https://drive.google.com/file/d/1Sj0aB2XebrfJ5GBxZOsrRuom-vaKR07U/view">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Resume;