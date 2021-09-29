//import Link from 'next/link';
import React from 'react';
import "./Intro.css"
//import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
//import { DiCssdeck } from 'react-icons/di';


const Intro = () => {
    return(
        <div>
            <section id="intro-sec">
                <div id="intro-grid-container">
                    <img id="intro-image" src={process.env.PUBLIC_URL + "/images/me.jpg"} width="240" height="320"/>
                    <div id="intro-title"><strong>Hello!</strong></div>
                    <div id="intro-name">My name is <strong>Ostyn Sy</strong>.</div>
                    <div id="intro-desc">I'm a full-time student at <strong>San Francisco State University</strong> working on my <strong>Computer Science Major</strong>. Currently, I am focused on Software Engineering as a <strong>Fullstack Developer</strong>.</div>
                    <a id="button-contactme" href="mailto:ostynsy@gmail.com"> Contact Me</a>
                </div>
            </section>
    
        </div>
    )
    };

export default Intro;