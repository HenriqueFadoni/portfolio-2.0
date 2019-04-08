import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Button from './Button/Button';
import ModalBackground from './ModalBackground/ModalBackground';
import Items from './Items/Items';

class Menu extends Component {
    state = {
        links: [
            { to: "/", title: 'HOME' },
            { to: "/description", title: 'DESCRIPTION' },
            { to: "/portfolio", title: 'PORTFOLIO' },
            { to: "https://drive.google.com/file/d/1QDj5qjCMVyWiGUe63Jp9K4I6lXv4A97j/view?usp=sharing", title: 'RESUME' },
            { to: "/contacts", title: 'CONTACTS' }
        ],
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
        const navLinks = this.state.links.map(link => {
            if (link.title !== 'RESUME') {
                return (
                    <li className="navigation__item" key={link.title}>
                        <NavLink
                            className="navigation__link"
                            onClick={this.onClickHandler}
                            to={link.to}>
                            {link.title}
                        </NavLink>
                    </li>
                );
            } else {
                return (
                    <li className="navigation__item" key={link.title}>
                        <a
                            target="_blank"
                            className="navigation__link"
                            href={link.to}
                            rel="noopener noreferrer">
                            {link.title}
                        </a>
                    </li>
                );
            }
        });

        return (
            <div className="navigation">
                <Button
                    onClickHandler={this.onClickHandler}
                    show={this.state.show} />

                <ModalBackground show={this.state.show} />

                <Items
                    links={navLinks}
                    show={this.state.show} />
            </div>
        );
    }
}

export default Menu;