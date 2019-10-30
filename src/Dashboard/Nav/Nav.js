import React from 'react';
import './nav.css';
import Burger from '../../../src/Icons/menu.png';
import Book from '../../../src/Icons/write.png';

export default class Nav extends React.Component {

    constructor(props) {
        super();
        this.state = {
            pageArray: ["280 S2 T2", "Lecture 1 notes", "280 hints", "280 Syntax"],
            openedPage: 0
        };
        this.newlySelected = this.newlySelected.bind(this);
    }

    newlySelected(index) {
        this.setState({openedPage: index})
    }

    render() {
        return (
            <div>
                <nav id="navigation">
                    <img alt="Menu button" src={Burger} id="navigation-handburger" onClick={this.props.triggerEvent} style={{transform: `rotate(${180 - (180*this.props.xRotate)}deg)`}}></img>
                    <h5 id="navigation-title">Computer Science 280</h5>
                    <div id="navigation-avatars">
                        <span style={{background: 'rgb(255, 0, 191)'}}>M</span>
                        <span style={{background: 'rgb(77, 223, 90)'}}>T</span>
                    </div>
                </nav>
                <div id="page-shifter">
                    <div id="page-explore">
                        <img src={Book}></img><span>Open File</span>
                    </div>
                    {this.state.pageArray.map((content, index) => <span onClick={() => this.newlySelected(index)} class={this.state.openedPage == index ? "page-shifter-item active" : "page-shifter-item"}>{content}</span> )}
                </div>
            </div>
        );
    }

}