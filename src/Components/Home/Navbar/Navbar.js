import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo.png'

const Navbar = () => {
    return (
        <div className="container">
            <div className="row ">
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
                    <a class="nav-link" href="blog">
                    <span className="nav-iteam">Blog</span>
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
          </div>          
        </div>
    );
};

export default Navbar;