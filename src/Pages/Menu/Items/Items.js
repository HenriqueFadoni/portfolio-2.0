import React from 'react';

const Items = props => (
    <nav className={props.show ? "navigation__nav-active" : "navigation__nav"}>
        <ul className="navigation__list">
            <li className="navigation__item">
                <a href="#" className="navigation__link">HOME</a>
            </li>
            <li className="navigation__item">
                <a href="#" className="navigation__link">DESCRIPTION</a>
            </li>
            <li className="navigation__item">
                <a href="#" className="navigation__link">PORTFOLIO</a>
            </li>
            <li className="navigation__item">
                <a href="#" className="navigation__link">RESUME</a>
            </li>
            <li className="navigation__item">
                <a href="#" className="navigation__link">CONTACTS</a>
            </li>
        </ul>
    </nav>
);

export default Items;