import React from 'react';

import videoMP4 from '../../img/Love-Coding.mp4'
import videoWEBM from '../../img/Love-Coding.webm'

const Introduction = () => (
    <section className="introduction">
        <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
            <source src={videoMP4} type="video/mp4"/>
            <source src={videoWEBM} type="video/webm"/>
            Your browser is not supported!
        </video>
        </div>
        <div className="introduction__grid">
            <h1 className="title__big-blue">
                <span>Hello</span>,
            </h1>
            <h1 className="title__medium-white">
                My name is Henrique, I'm a Web Developer
            </h1>
        </div>
    </section>
);

export default Introduction;