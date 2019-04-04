import React from 'react';

const Button = props => (
    <button onClick={props.onClickHandler} className="navigation__button">
        <span className={props.show ? "navigation__icon-active" : "navigation__icon"}>&nbsp;</span>
    </button>
);

export default Button;