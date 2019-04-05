import React from 'react';
import { NavLink } from 'react-router-dom';

const Items = props => (
    <nav className={props.show ? "navigation__nav-active" : "navigation__nav"}>
        <ul className="navigation__list">
            <li className="navigation__item">
                <NavLink
                    onClick={props.onClickHandler}
                    className="navigation__link" 
                    to="/">
                    HOME
                </NavLink>
            </li>
            <li className="navigation__item">
                <NavLink 
                    onClick={props.onClickHandler}
                    className="navigation__link"
                    to="/description">
                    DESCRIPTION
                </NavLink>
            </li>
            <li className="navigation__item">
                <NavLink 
                    className="navigation__link" 
                    onClick={props.onClickHandler}
                    to="/portfolio">
                    PORTFOLIO
                </NavLink>
            </li>
            <li className="navigation__item">
            {/* CHANGE IT TO THE GOOGLE URL */}
                <NavLink 
                    className="navigation__link" 
                    onClick={props.onClickHandler}
                    to="/"> 
                    RESUME
                </NavLink>
            </li>
            <li className="navigation__item">
                <NavLink 
                    className="navigation__link" 
                    onClick={props.onClickHandler}
                    to="/contacts">
                    CONTACTS
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Items;