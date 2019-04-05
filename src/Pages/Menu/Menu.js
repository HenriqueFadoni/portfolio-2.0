import React, { Component } from 'react';

import Button from './Button/Button';
import ModalBackground from './ModalBackground/ModalBackground';
import Items from './Items/Items';

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
                <Button 
                    onClickHandler={this.onClickHandler}
                    show={this.state.show}/>

                <ModalBackground show={this.state.show}/>

                <Items 
                    onClickHandler={this.onClickHandler}
                    show={this.state.show}/>
            </div>
        );
    }
}

export default Menu;