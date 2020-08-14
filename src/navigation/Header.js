import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './navigation.module.scss';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  onClick = (event) => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }



  render() {
    return (
      <div className="header">

        {/* mobile  */}
        < MediaQuery maxDeviceWidth={500} >

          {this.state.collapsed &&
            <div className="menu-button" onClick={this.onClick}>+</div>
          }
          {!this.state.collapsed &&
            <div className="menu-button" onClick={this.onClick}>-</div>
          }

          <div 
          className={this.state.collapsed ? "nav" : "show"} 
          id="nav">
            <a href="https://medium.com/@subhanjali" target="_blank"><div className="link">Blog</div></a>
            <a href="mailto:subha.velaga@gmail.com"><div className="link">Contact</div></a>
            <a href="https://www.facebook.com/subhanjali" target="_blank"><div className="link">Facebook</div></a>
            <a href="https://www.linkedin.com/in/subhavelaga/" target="_blank"><div className="link">LinkedIn</div></a>
          </div>

        </ MediaQuery>

        <div className="title-div">
          <div className="title">Subhanjali</div>
          <div className="description">artist in oil and acrylic mediums</div>
        </div>

        {/* desktop  */}
        < MediaQuery minDeviceWidth={500} >
          <div className="nav">
            <a href="https://medium.com/@subhanjali" target="_blank"><div className="link">Blog</div></a>
            <a href="mailto:subha.velaga@gmail.com"><div className="link">Contact</div></a>
            <a href="https://www.facebook.com/subhanjali" target="_blank"><div className="link">Facebook</div></a>
            <a href="https://www.linkedin.com/in/subhavelaga/" target="_blank"><div className="link">LinkedIn</div></a>
          </div>
        </ MediaQuery>
      </div>
    )
  }
}

export default Header
