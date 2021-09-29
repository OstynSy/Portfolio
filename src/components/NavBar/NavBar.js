//import Link from 'next/link';
import React from 'react';
import './NavBar.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
//import { DiCssdeck } from 'react-icons/di';


const NavBar = () => {
    return(
        <div id="nav-container">

            <div id="logo-div">
                <img id="logo-image" src={process.env.PUBLIC_URL + "images/logo.png"} width="40" height="40"/>
            </div>

            <div id="component-buttons">
                <a href="#sec-exp">Experience</a>
                <a href="#sec-proj">Projects</a>
                <a href="#sec-res">Resume</a>
            </div>

            <div id="social-buttons">
                <a id="social-icon" href= "https://github.com/OstynSy">
                    <AiFillGithub size="3rem"/>
                </a>
                <a id="social-icon" href= "https://www.linkedin.com/in/ostyn-s-a4235a8b/">
                    <AiFillLinkedin size="3rem"/>
                </a>
            </div>

        </div>
    )
    };

export default NavBar;