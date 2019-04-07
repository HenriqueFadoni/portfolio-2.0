import React from 'react';

const Items = props => (
    <nav className={props.show ? "navigation__nav-active" : "navigation__nav"}>
        <ul className={props.show ? "navigation__list-active" : "navigation__list"}>
            {props.links}
        </ul>
    </nav>
);

export default Items;