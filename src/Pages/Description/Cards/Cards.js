import React from 'react';

import icon from '../../../img/symbol-defs.svg';

const Cards = () => (
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
);

export default Cards;