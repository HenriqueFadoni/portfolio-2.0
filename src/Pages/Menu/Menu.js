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
            { to: "/", title: 'RESUME' },
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
        const navLinks = this.state.links.map(link => (
            <li className="navigation__item">
                <NavLink
                    className="navigation__link" 
                    onClick={this.onClickHandler}
                    to={link.to}>
                    {link.title}
                </NavLink>
            </li>
        ));

        return (
            <div className="navigation">
                <Button 
                    onClickHandler={this.onClickHandler}
                    show={this.state.show}/>

                <ModalBackground show={this.state.show}/>

                <Items 
                    links={navLinks}
                    show={this.state.show}/>
            </div>
        );
    }
}

export default Menu;