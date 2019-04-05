import React from 'react';

const Description = () => (
    <section className="description">
        <div className="description__cards">
            <div className="description__cards-1">a</div>
            <div className="description__cards-2">b</div>
            <div className="description__cards-3">c</div>
        </div>

        <div className="description__about"> 
            <div className="description__about-text">
                <p>Description text</p>
            </div>

            <div className="description__about-img">
                <img src="" alt="My Image Profile"/>
            </div>

            <div className="description__about-skills">
                <h2>My Skills</h2>
                <ul>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
    </section>
);

export default Description;