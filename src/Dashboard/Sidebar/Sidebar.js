import React from 'react';
import './sidebar.css';

export default class Sidebar extends React.Component {

    constructor(props) {
        super();
        this.state = {
            classList: ["Computer Science 280", "Computer Science 230", "Information Systems 222", "Maori 101"],
            activeClass: 0,
        }
    }

    render() {
        console.log(this.props.leftPos);
        return (
            <aside id="sidebar" style={{display: this.props.isVisible, left: this.props.leftPos}}>
                <h5>Your classes</h5>
                <ul>
                    {   this.state.classList.map((content, index) => <li className={this.state.activeClass == index ? "active" : ""}>{content}</li>)   }
                </ul>
            </aside>
        );
    }

}