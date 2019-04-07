import React from 'react';

import icon from '../../img/symbol-defs.svg';
import personalImage from '../../img/image-4.jpg'

const Description = () => (
    <section className="description">
        <div className="description__cards">
            <div className="description__cards-1">
                <svg className="cards__icon margin-bottom-small margin-top-small">
                    <use xlinkHref={`${icon}#icon-code`}></use>
                </svg>
                <p>Websites don't have to be static, I love making pages come to life.</p>
            </div>
            <div className="description__cards-2">
                <svg className="cards__icon margin-bottom-small margin-top-small">
                    <use xlinkHref={`${icon}#icon-clock`}></use>
                </svg>
                <p>Fast load times and lag free interaction, my highest priority.</p>
            </div>
            <div className="description__cards-3">
                <svg className="cards__icon margin-bottom-small margin-top-small">
                    <use xlinkHref={`${icon}#icon-tv`}></use>
                </svg>
                <p>My layouts will work on any device, big or small.</p>
            </div>
        </div>

        <div className="description__about">
            <div className="description__about-text">
                <h2>Who is this guy?</h2>
                <p>
                    I'm a Junior Front-End Developer. I have serious passion in developing web applications as well as learning new technology. 
                    I love to build websites with UI Effects, intuitive design, and dynamic user experiences.
                </p>
            </div>

            <div className="description__about-img">
                <img src={personalImage} alt="My Profile" />
            </div>

            <div className="description__about-skills">
                <h2>My Skills</h2>
                <ul>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
    </section >
);

export default Description;