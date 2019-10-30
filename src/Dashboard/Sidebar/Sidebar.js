import React from 'react';
import './sidebar.css';

export default class Sidebar extends React.Component {

    constructor(props) {
        super();
        this.state = {
            classList: ["Computer Science 280", "Computer Science 230", "Information Systems 222", "Maori 101"],
            activeClass: 0
        };
    }

    render() {
        return (
            <aside id="sidebar" style={{display: this.props.isVisible, color: (this.props.theme ? "#fff" : "#01193d"), borderRight: '1px solid ' + (this.props.theme ? "#01193d" : "#f3f3f3"), left: this.props.leftPos, background: (this.props.theme ? "#01193d" : "#fff")}}>

                <div id="sidebar-head" style={{background: (this.props.theme ? "#01193d" : "#f9fbff")}}>
                    <h5>Student</h5>
                    <h3>Michael Catterall</h3>
                    <p>Edit Profile</p>
                    <p>Settings</p>

                </div>

                <h5>Your classes</h5>
                <ul>
                    {   this.state.classList.map((content, index) => <li className={this.state.activeClass == index ? "active" : ""}>{content}</li>)   }
                    <br/><br/>
                    <li id="dark" className={this.props.theme ? "active" : ""} onClick={() => this.props.switchTheme(true)}>Dark</li>
                    <li id="light" className={this.props.theme ? "" : "active"} onClick={() => this.props.switchTheme(false)}>Light</li>
                </ul>

            </aside>
        );
    }

}