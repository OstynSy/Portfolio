import React from 'react';
import "./Intro.css"

const Intro = () => {
    return(
            <section id="intro-sec">
                <div id="intro-grid-container">
                    <div id="intro-title"><strong>Hello!</strong></div>
                    <div id="intro-name">My name is <strong>Ostyn Sy</strong>.</div>
                    <div id="intro-desc">I'm a full-time student at <strong>San Francisco State University</strong> working on my <strong>Computer Science Major</strong>. Currently, I am focused on Software Engineering as a <strong>Front-End</strong> and <strong>Back-End Developer.</strong></div>
                    <a id="button-contactme" href="mailto:ostynsy@gmail.com"> Contact Me</a>
                </div>
            </section>
    )
    };

export default Intro;