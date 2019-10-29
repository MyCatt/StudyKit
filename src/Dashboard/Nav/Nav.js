import React from 'react';
import './nav.css';
import Burger from '../../../src/Icons/menu.png';

export default class Nav extends React.Component {

    constructor(props) {
        super();
        this.state = {
            pageArray: ["280 S2 T2", "Lecture 1 notes", "280 hints", "280 Syntax"]
        };
    }

    render(props) {

        return (
            <div>
                <nav id="navigation">
                    <img alt="Menu button" src={Burger} id="navigation-handburger" onClick={this.props.triggerEvent}></img>
                    <div id="navigation-avatars">
                        <span style={{background: 'rgb(255, 0, 191)'}}>M</span>
                        <span style={{background: 'rgb(77, 223, 90)'}}>T</span>
                    </div>
                </nav>
                <div id="page-shifter">
                    {this.state.pageArray.map((content) => <span class="page-shifter-item">{content}</span> )}
                </div>
            </div>
        );
    }

}