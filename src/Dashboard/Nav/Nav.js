import React from 'react';
import './nav.css';
import Burger from '../../../src/Icons/menu.png';

export default class Nav extends React.Component {

    render(props) {

        return (
            <nav id="navigation">
                <img alt="Menu button" src={Burger} id="navigation-handburger" onClick={this.props.triggerEvent}></img>
            </nav>
        );
    }

}