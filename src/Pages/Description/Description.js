import React from 'react';

import icon from '../../img/symbol-defs.svg';

const Description = () => (
    <section className="description">
        <div className="description__cards">
            <div className="description__cards-1">
                <svg className="cards__icon margin-bottom-small margin-top-small">
                    <use xlinkHref={`${icon}#icon-code`}></use>
                </svg>
                <p>I love coding Dynamic Websites and maniputaling data.</p>
            </div>
            <div className="description__cards-2">
                <svg className="cards__icon margin-bottom-small margin-top-small">
                    <use xlinkHref={`${icon}#icon-clock`}></use>
                </svg>
                <p>Nothing better than Fast and reliable Web Applications!</p>
            </div>
            <div className="description__cards-3">
                <svg className="cards__icon margin-bottom-small margin-top-small">
                    <use xlinkHref={`${icon}#icon-tv`}></use>
                </svg>
                <p>Responsive design is one of my major goals.</p>
            </div>
        </div>

        <div className="description__about">
            <div className="description__about-text">
                <p>Description text</p>
            </div>

            <div className="description__about-img">
                <img src="" alt="My Image Profile" />
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