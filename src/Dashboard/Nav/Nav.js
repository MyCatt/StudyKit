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

    componentWillReceiveProps(nextProp) {
        if(this.state.openedPage != nextProp.forceNav && nextProp.forceNav != undefined)
            this.newlySelected(nextProp.forceNav);
    }

    newlySelected(index) {
        if(index < this.state.pageArray.length) {
            this.setState({openedPage: index});
            this.props.updateNav(index);
        }
    }

    render(props) {
        return (
            <div>
                <nav id="navigation" style={{background: this.props.theme ? '#01193d' : '#fff', color: '#fff'}}>
                    <img alt="Menu button" src={Burger} id="navigation-handburger" onClick={this.props.triggerEvent} style={{transform: `rotate(${180 - (180*this.props.xRotate)}deg)`}}></img>
                    <h5 id="navigation-title" style={{color: this.props.theme ? '#fff' : '#000'}}>Computer Science 280</h5>
                    <div id="navigation-avatars">
                        <span style={{background: 'rgb(255, 0, 191)'}}>M</span>
                        <span style={{background: 'rgb(77, 223, 90)'}}>T</span>
                    </div>
                </nav>
                <div id="page-shifter" style={{background: this.props.theme ? '#0c2650' : '#fff', color: this.props.theme ? '#fff' : '#0c2650'}}>
                    <div id="page-explore">
                        <img src={Book}></img><span>Open File</span>
                    </div>
                    {this.state.pageArray.map((content, index) => <span key={"tab" + index} onClick={() => this.newlySelected(index)} className={this.state.openedPage == index ? "page-shifter-item active" : "page-shifter-item"}>{content}</span> )}
                </div>
            </div>
        );
    }

}