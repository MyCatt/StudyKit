import React from 'react';
import './sidebar.css';
import Moon from '../../../src/Icons/moon.png';
import Sun from '../../../src/Icons/sun.png';
import Disk from '../../../src/Icons/disk.png';
import Plug from '../../../src/Icons/plug.png';
import Business from '../../../src/Icons/business.png';
import Speak from '../../../src/Icons/speak.png';

export default class Sidebar extends React.Component {

    constructor(props) {
        super();
        this.state = {
            classList: ["Computer Science 280", "Computer Science 230", "Information Systems 222", "Maori 101"],
            iconList: [Disk, Plug, Business, Speak],
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
                    {   this.state.classList.map((content, index) => <li key={"nav" + index} className={this.state.activeClass == index ? "active" : ""}><img src={this.state.iconList[index]}></img>{content}</li>)   }
                    <br/><br/>
                    <h5>Theme</h5>
                    <br></br>
                    <li id="dark" className={this.props.theme ? "active" : ""} onClick={() => this.props.switchTheme(true)}><img src={Moon}></img>Dark</li>
                    <li id="light" className={this.props.theme ? "" : "active"} onClick={() => this.props.switchTheme(false)}><img src={Sun}></img>Light</li>
                </ul>

            </aside>
        );
    }

}