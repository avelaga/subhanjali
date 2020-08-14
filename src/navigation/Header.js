import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './navigation.module.scss';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  onClick = (event) => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="header">

        <div className="title-div">
          <div className="title">Subhanjali</div>
          <div className="description">My Art</div>
        </div>

        {/* desktop  */}
        {!this.state.collapsed &&
          <div className="nav">
            <a href="https://medium.com/@subhanjali" target="_blank"><div className="link">Blog</div></a>
            <a href="mailto:subha.velaga@gmail.com"><div className="link">Contact</div></a>
            <a href="https://www.facebook.com/subhanjali" target="_blank"><div className="link">Facebook</div></a>
          </div>
        }

        {/* mobile  */}
        < MediaQuery maxDeviceWidth={500} >
          <div className="menu-button" onClick={this.onClick}>+</div>
        </ MediaQuery>
        
      </div>
    )
  }
}

export default Header
