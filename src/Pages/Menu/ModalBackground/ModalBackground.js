import React from 'react';

const ModalBackground = props => (
    <div className={props.show ? "navigation__background-active" : "navigation__background"}>&nbsp;</div>
);

export default ModalBackground;