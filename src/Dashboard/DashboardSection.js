import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Nav from './Nav/Nav';
import Hammer from 'react-hammerjs';
import AddDocument from './AddDocument/AddDocument';
import Document from './Document/Document';
import './dashboard.css';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

export default class Dashboard extends React.Component {

    constructor() {
        super()
        this.state = {
            NavVisible: false,
            navPos: 0,
            navWidth: 0.7,
            darkTheme: false,
            currentIndex: 0
        }
        this.triggerMenu = this.triggerMenu.bind(this);
        this.triggerUnlockMenu = this.triggerUnlockMenu.bind(this);
        this.triggerLockMenu = this.triggerLockMenu.bind(this);
        this.resize = this.resize.bind(this);
        this.switchTheme = this.switchTheme.bind(this);
        this.updateNav = this.updateNav.bind(this);
        this.currentIndex = this.currentIndex.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        document.body.style = `background: ${this.state.darkTheme ? '#0c1625' : '#fff'};`;
        this.resize();
    }
    
    resize() {
        if(isMobile) {
            this.setState({screenWidth: window.innerWidth, navPos: this.state.NavVisible ? this.state.navPos : window.innerWidth * this.state.navWidth});
        }else{
            this.setState({screenWidth: window.innerWidth, NavVisible: true, navPos: 0})
        }
    }

    switchTheme(newState) {
        this.setState({darkTheme: newState});
        document.body.style = `background: ${newState ? '#0c1625' : '#fff'};`;
    }

    triggerMenu(e) {
        if(isMobile) { // Mobile/tablet
            if(!e.direction){
                this.setState({ NavVisible: true,  navPos: (this.state.navPos < 0 || !this.state.NavVisible) ? 0 : -(this.state.screenWidth*this.state.navWidth)});
            } else if(e.direction === 4 && -(this.state.screenWidth*this.state.navWidth) + e.center.x < 0){
                this.setState({ NavVisible: true,  navPos: -(this.state.screenWidth*this.state.navWidth) + e.center.x});
            }else if(e.direction === 2 && -(this.state.screenWidth*this.state.navWidth) + e.center.x > -(this.state.screenWidth*this.state.navWidth) && -(this.state.screenWidth*this.state.navWidth) + e.center.x < 0)
                this.setState({ NavVisible: true,  navPos: -(this.state.screenWidth*this.state.navWidth) + e.center.x});
        }
    }

    updateNav(index) {
        this.setState({currentIndex: index})
    }

    currentIndex(e) {
        if(e.direction == 2) {
            this.updateNav(this.state.currentIndex+1);
        }else if(e.direction == 4 && this.state.currentIndex > 0) {
            this.updateNav(this.state.currentIndex-1);
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
        const swipeOptions = {
            touchAction:'compute',
            recognizers: {
                tap: {
                    time: 600,
                    threshold: 600
                }
            }
        }

        return (
                <div>
                    <Nav theme={this.state.darkTheme} triggerEvent={this.triggerMenu} updateNav={this.updateNav} forceNav={this.state.currentIndex} xRotate={this.state.navPos/(this.state.screenWidth*this.state.navWidth)}/>
                    
                    <Hammer onPan={this.triggerMenu} onPanStart={this.triggerUnlockMenu} onPanEnd={this.triggerLockMenu} options={hammerOptions}>
                        <div>
                            <Sidebar theme={this.state.darkTheme} switchTheme={this.switchTheme} leftPos={this.state.navPos} isVisible={this.state.NavVisible ? 'block' : 'none'} />
                            <div id="sidebarHandle"></div>
                        </div>
                    </Hammer>
                    <Hammer onSwipe={this.currentIndex} options={swipeOptions}>       
                        <div><Document theme={this.state.darkTheme} currentIndex={this.state.currentIndex}/></div>
                    </Hammer>
                    <AddDocument />
                </div>
        );
    }

}