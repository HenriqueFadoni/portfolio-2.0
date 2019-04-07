import React from 'react';

import icon from '../../img/symbol-defs.svg';

const Description = () => (
    <section className="description">
        <div className="description__cards">
            <div className="description__cards-1">
                <svg className="cards__icon">
                    <use xlinkHref={`${icon}#icon-code`}></use>
                </svg>
                <p>Websites don't have to be static, I love making pages come to life.</p>
            </div>
            <div className="description__cards-2">
                <svg className="cards__icon">
                    <use xlinkHref={`${icon}#icon-clock`}></use>
                </svg>
                <p>Fast load times and lag free interaction, my highest priority.</p>
            </div>
            <div className="description__cards-3">
                <svg className="cards__icon">
                    <use xlinkHref={`${icon}#icon-tv`}></use>
                </svg>
                <p>My major goal is to produce layouts that will work on any device, big or small.</p>
            </div>
        </div>

        <div className="description__about">
            <div className="description__about-text">
                <h2 className="text__grey text__grey-subtitle margin-bottom-smallest">Who is this guy?</h2>
                <p className="text__grey">
                    I'm a Junior Front-End Developer. I have serious passion in developing web applications as well as learning new technology. 
                    I love building websites with UI Effects, intuitive design, and dynamic user experiences.
                </p>
            </div>

            <div className="description__about-img"></div>

            <div className="description__about-skills">
                <h2 className="text__grey text__grey-subtitle margin-bottom-smallest">My Skills</h2>
                <ul>
                    <li>JS ES6+</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Jest</li>
                    <li>Enzyme</li>
                    <li>SASS</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>GitHub</li>
                    <li>BitButcket</li>
                </ul>
            </div>
        </div>
    </section >
);

export default Description;