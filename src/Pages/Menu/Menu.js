import React, { Component } from 'react';

class Menu extends Component {
    state = {
        show: false
    }

    onClickHandler = () => {
        let newState = this.state.show;

        if (newState) {
            newState = false;
        } else {
            newState = true;
        }

        this.setState({ show: newState });
    }

    render() {
        return (
            <div className="navigation">

                <button onClick={this.onClickHandler} className="navigation__button">
                    <span className={this.state.show ? "navigation__icon-active" : "navigation__icon"}>&nbsp;</span>
                </button>


                <div className={this.state.show ? "navigation__background-active" : "navigation__background"}>&nbsp;</div>

                <nav className={this.state.show ? "navigation__nav-active" : "navigation__nav"}>
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
            </div>
        );
    }
}

export default Menu;