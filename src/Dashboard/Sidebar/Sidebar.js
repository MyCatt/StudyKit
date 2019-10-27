import React from 'react';
import './sidebar.css';

export default class Sidebar extends React.Component {

    render() {
        return (
            <aside id="sidebar" style={{display: this.props.isVisible, left: this.props.leftPos, transition: this.props.transition}}>

            </aside>
        );
    }

}