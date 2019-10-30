import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Nav from './Nav/Nav';
import Hammer from 'react-hammerjs';
import AddDocument from './AddDocument/AddDocument';
import Document from './Document/Document';
import './dashboard.css';

export default class Dashboard extends React.Component {

    constructor() {
        super()
        this.state = {
            NavVisible: true,
            navPos: 0,
            navWidth: 0.7
        }
        this.triggerMenu = this.triggerMenu.bind(this);
        this.triggerUnlockMenu = this.triggerUnlockMenu.bind(this);
        this.triggerLockMenu = this.triggerLockMenu.bind(this);
        this.resize = this.resize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        if(window.innerWidth < 950) {
        this.setState({screenWidth: window.innerWidth, navPos: this.state.NavVisible ? this.state.navPos : window.innerWidth * this.state.navWidth, NavVisible: window.innerWidth > 950});
    }
}

    triggerMenu(e) {
        if(this.state.screenWidth < 950) { // Mobile/tablet
            if(!e.direction){
                this.setState({ NavVisible: true,  navPos: (this.state.navPos < 0 || !this.state.NavVisible) ? 0 : -(this.state.screenWidth*this.state.navWidth)});
            } else if(e.direction === 4 && -(this.state.screenWidth*this.state.navWidth) + e.center.x < 0){
                this.setState({ NavVisible: true,  navPos: -(this.state.screenWidth*this.state.navWidth) + e.center.x});
            }else if(e.direction === 2 && -(this.state.screenWidth*this.state.navWidth) + e.center.x > -(this.state.screenWidth*this.state.navWidth) && -(this.state.screenWidth*this.state.navWidth) + e.center.x < 0)
                this.setState({ NavVisible: true,  navPos: -(this.state.screenWidth*this.state.navWidth) + e.center.x});
        }
    }

    triggerUnlockMenu() {
        this.setState({transitionNav: 'none'})
    }

    triggerLockMenu() {
        if(this.state.navPos < -this.state.screenWidth*this.state.navWidth/2) {
            this.setState({ navPos: -(this.state.screenWidth*this.state.navWidth) })
        }else{
            this.setState({ navPos: 0 })
        }
    }

    render() {

        const hammerOptions = {
            touchAction:'compute',
            direction: 'DIRECTION_LEFT'
        };

        return (
            
                <div>
                    <Nav triggerEvent={this.triggerMenu} xRotate={this.state.navPos/(this.state.screenWidth*this.state.navWidth)}/>
                    
                    <Hammer onPan={this.triggerMenu} onPanStart={this.triggerUnlockMenu} onPanEnd={this.triggerLockMenu} options={hammerOptions}>
                        <div>
                            <Sidebar leftPos={this.state.navPos} isVisible={this.state.NavVisible ? 'block' : 'none'} />
                            <div id="sidebarHandle"></div>
                        </div>
                    </Hammer>
                    <Document />
                    <AddDocument />
                </div>
        );
    }

}