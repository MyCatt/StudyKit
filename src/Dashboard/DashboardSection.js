import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Nav from './Nav/Nav';
import Hammer from 'react-hammerjs';
import './dashboard.css';

export default class Dashboard extends React.Component {

    constructor() {
        super()
        this.state = {
            NavVisible: false,
            navPos: 0
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
        this.setState({screenWidth: window.innerWidth});
    }

    triggerMenu(e) {
        if(!e.direction){
            this.setState({ NavVisible: true,  navPos: (this.state.navPos < 0) ? 0 : -(this.state.screenWidth*0.8)});
            this.setState({transitionNav: 'left 0.5s ease'});
        } else if(e.direction === 4 && -(this.state.screenWidth*0.8) + e.center.x < 0){
            this.setState({ NavVisible: true,  navPos: -(this.state.screenWidth*0.8) + e.center.x});
        }else if(e.direction === 2 && -(this.state.screenWidth*0.8) + e.center.x < 0)
            this.setState({ NavVisible: true,  navPos: -(this.state.screenWidth*0.8) + e.center.x});
    }

    triggerUnlockMenu() {
        this.setState({transitionNav: 'none'})
    }

    triggerLockMenu() {
        this.setState({transitionNav: 'left 0.5s ease'})
        if(this.state.navPos < -this.state.screenWidth/2) {
            this.setState({ navPos: '-80vw' })
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
                    <Nav triggerEvent={this.triggerMenu} />
                    <Hammer onPan={this.triggerMenu} onPanStart={this.triggerUnlockMenu} onPanEnd={this.triggerLockMenu} options={hammerOptions}>
                        <div>
                            <Sidebar transition={this.state.transitionNav} leftPos={this.state.navPos} isVisible={this.state.NavVisible ? 'block' : 'none'} />
                            <div id="sidebarHandle"></div>
                        </div>
                    </Hammer>
                </div>
        );
    }

}